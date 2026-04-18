import React from 'react';

export default function ReferenceArchitecture() {
  return (
    <div className="w-full border border-white/10 bg-[#0b0817] p-6 md:p-8 overflow-hidden">
      <div className="text-xs font-bold text-maya-gold/70 uppercase tracking-widest mb-6">
        Reference Architecture — Sovereign Deployment
      </div>

      <svg
        viewBox="0 0 900 400"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Reference Architecture Diagram"
      >
        {/* Background grid */}
        <defs>
          <pattern id="arch-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="900" height="400" fill="url(#arch-grid)" />

        {/* Layer 1: Client / Endpoints */}
        <rect x="20" y="20" width="160" height="80" rx="2" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <text x="100" y="52" textAnchor="middle" fill="rgba(201,162,39,0.8)" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="2">CLIENT LAYER</text>
        <text x="100" y="70" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">Web · Mobile · API Clients</text>
        <text x="100" y="85" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace">TLS 1.3 · Auth Required</text>

        {/* Arrow right */}
        <line x1="180" y1="60" x2="220" y2="60" stroke="rgba(201,162,39,0.4)" strokeWidth="1" markerEnd="url(#arrow-gold)" />
        <defs>
          <marker id="arrow-gold" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 Z" fill="rgba(201,162,39,0.6)" />
          </marker>
          <marker id="arrow-white" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 Z" fill="rgba(255,255,255,0.3)" />
          </marker>
        </defs>

        {/* Layer 2: API Gateway / Access Control */}
        <rect x="220" y="20" width="160" height="80" rx="2" fill="rgba(201,162,39,0.06)" stroke="rgba(201,162,39,0.25)" strokeWidth="1" />
        <text x="300" y="52" textAnchor="middle" fill="rgba(201,162,39,0.9)" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="2">ACCESS CONTROL</text>
        <text x="300" y="70" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">API Gateway · IAM · SSO</text>
        <text x="300" y="85" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace">RBAC · Audit Logging</text>

        {/* Arrow right */}
        <line x1="380" y1="60" x2="420" y2="60" stroke="rgba(201,162,39,0.4)" strokeWidth="1" markerEnd="url(#arrow-gold)" />

        {/* Layer 3: AI Orchestration */}
        <rect x="420" y="10" width="180" height="100" rx="2" fill="rgba(201,162,39,0.08)" stroke="rgba(201,162,39,0.35)" strokeWidth="1.5" />
        <text x="510" y="38" textAnchor="middle" fill="rgba(201,162,39,1)" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="2">AI ORCHESTRATION</text>
        <text x="510" y="55" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="sans-serif">Agent Runtime · Workflow Engine</text>
        <text x="510" y="70" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">Model Router · Context Manager</text>
        <text x="510" y="85" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace">Human-in-loop Controls</text>
        <text x="510" y="98" textAnchor="middle" fill="rgba(201,162,39,0.5)" fontSize="7" fontFamily="monospace">Explainability · Rate Limiting</text>

        {/* Arrow right */}
        <line x1="600" y1="60" x2="640" y2="60" stroke="rgba(255,255,255,0.25)" strokeWidth="1" markerEnd="url(#arrow-white)" />

        {/* Layer 4: Data & Models */}
        <rect x="640" y="20" width="240" height="80" rx="2" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <text x="760" y="45" textAnchor="middle" fill="rgba(201,162,39,0.8)" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="2">DATA &amp; MODELS</text>
        <text x="760" y="62" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">Enterprise Data · Vector Store · LLMs</text>
        <text x="760" y="77" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace">Encrypted at Rest · Residency Controlled</text>
        <text x="760" y="90" textAnchor="middle" fill="rgba(201,162,39,0.45)" fontSize="7" fontFamily="monospace">PDPL · SOC2 Aligned</text>

        {/* Horizontal separator */}
        <line x1="20" y1="140" x2="880" y2="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        {/* Bottom section: Deployment options */}
        <text x="20" y="165" fill="rgba(201,162,39,0.6)" fontSize="8" fontFamily="monospace" fontWeight="bold" letterSpacing="2">DEPLOYMENT MODELS</text>

        {/* Cloud */}
        <rect x="20" y="175" width="190" height="60" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="115" y="197" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="monospace" fontWeight="bold">CLOUD HOSTED</text>
        <text x="115" y="213" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="sans-serif">AWS · Azure · GCP</text>
        <text x="115" y="227" textAnchor="middle" fill="rgba(201,162,39,0.45)" fontSize="7" fontFamily="monospace">SOC2 · ISO 27001</text>

        {/* Private Cloud */}
        <rect x="230" y="175" width="190" height="60" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="325" y="197" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="monospace" fontWeight="bold">PRIVATE CLOUD</text>
        <text x="325" y="213" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="sans-serif">VPC · Dedicated Tenancy</text>
        <text x="325" y="227" textAnchor="middle" fill="rgba(201,162,39,0.45)" fontSize="7" fontFamily="monospace">NCA ECC · PDPL</text>

        {/* On-Prem */}
        <rect x="440" y="175" width="190" height="60" rx="2" fill="rgba(201,162,39,0.04)" stroke="rgba(201,162,39,0.15)" strokeWidth="1" />
        <text x="535" y="197" textAnchor="middle" fill="rgba(201,162,39,0.8)" fontSize="8" fontFamily="monospace" fontWeight="bold">ON-PREMISES</text>
        <text x="535" y="213" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="sans-serif">Air-Gapped · Full Data Control</text>
        <text x="535" y="227" textAnchor="middle" fill="rgba(201,162,39,0.45)" fontSize="7" fontFamily="monospace">Maximum Sovereignty</text>

        {/* Hybrid */}
        <rect x="650" y="175" width="230" height="60" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="765" y="197" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="monospace" fontWeight="bold">HYBRID</text>
        <text x="765" y="213" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="sans-serif">Cloud + On-Prem Integration</text>
        <text x="765" y="227" textAnchor="middle" fill="rgba(201,162,39,0.45)" fontSize="7" fontFamily="monospace">Controlled Data Boundaries</text>

        {/* Compliance spine */}
        <line x1="20" y1="265" x2="880" y2="265" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="20" y="288" fill="rgba(201,162,39,0.6)" fontSize="8" fontFamily="monospace" fontWeight="bold" letterSpacing="2">COMPLIANCE SPINE</text>

        <rect x="20" y="298" width="120" height="28" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="80" y="316" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">NIST 800-53</text>

        <rect x="155" y="298" width="120" height="28" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="215" y="316" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">SOC2 Type II</text>

        <rect x="290" y="298" width="120" height="28" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="350" y="316" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">ISO 27001</text>

        <rect x="425" y="298" width="120" height="28" rx="2" fill="rgba(201,162,39,0.05)" stroke="rgba(201,162,39,0.2)" strokeWidth="1" />
        <text x="485" y="316" textAnchor="middle" fill="rgba(201,162,39,0.7)" fontSize="7" fontFamily="monospace">PDPL (KSA)</text>

        <rect x="560" y="298" width="120" height="28" rx="2" fill="rgba(201,162,39,0.05)" stroke="rgba(201,162,39,0.2)" strokeWidth="1" />
        <text x="620" y="316" textAnchor="middle" fill="rgba(201,162,39,0.7)" fontSize="7" fontFamily="monospace">NCA ECC</text>

        <rect x="695" y="298" width="120" height="28" rx="2" fill="rgba(201,162,39,0.05)" stroke="rgba(201,162,39,0.2)" strokeWidth="1" />
        <text x="755" y="316" textAnchor="middle" fill="rgba(201,162,39,0.7)" fontSize="7" fontFamily="monospace">SDAIA</text>

        {/* Bottom note */}
        <text x="450" y="370" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="7" fontFamily="monospace">
          MAYA AI — SOVEREIGN DEPLOYMENT REFERENCE ARCHITECTURE — v2026.1
        </text>
      </svg>
    </div>
  );
}
