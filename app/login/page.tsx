"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        router.push("/crm");
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "No se ha podido iniciar sesión.");
      }
    } catch {
      setError("Error de conexión. Prueba otra vez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={styles.page}>
      <form onSubmit={onSubmit} style={styles.card}>
        <div style={styles.wordmark}>Mrs. Pink</div>
        <h1 style={styles.title}>Entra en el CRM</h1>
        <label style={styles.label}>
          Email
          <input
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Contraseña
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        {error ? <p style={styles.error}>{error}</p> : null}
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "#530F0E",
    fontFamily:
      '"Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    background: "#FBFAF4",
    color: "#30150E",
    borderRadius: 20,
    padding: "32px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    boxShadow: "0 24px 60px rgba(0,0,0,.35)",
  },
  wordmark: { color: "#EEABC5", fontWeight: 700, letterSpacing: "-.035em", fontSize: 22 },
  title: { margin: "4px 0 10px", fontSize: 20, fontWeight: 600 },
  label: { display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 500 },
  input: {
    font: "inherit",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(48,21,14,.22)",
    background: "#fff",
    color: "#30150E",
  },
  error: { color: "#A3271F", fontSize: 13, margin: 0 },
  button: {
    marginTop: 6,
    font: "inherit",
    fontWeight: 600,
    cursor: "pointer",
    padding: "11px 14px",
    borderRadius: 12,
    border: "none",
    background: "#EEABC5",
    color: "#530F0E",
  },
};
