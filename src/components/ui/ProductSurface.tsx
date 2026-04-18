import React from 'react';

export default function ProductSurface() {
  return (
    <div className="w-full border border-white/10 bg-[#080614] overflow-hidden">
      {/* Simulated browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-[#0b0818]">
        <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
        <div className="flex-1 mx-4 h-6 bg-white/5 rounded px-3 flex items-center">
          <span className="text-[9px] font-mono text-white/25">ops.mayaai.net — Operational Intelligence Dashboard</span>
        </div>
        <div className="text-[9px] font-mono text-maya-gold/50 uppercase tracking-widest">SECURE</div>
      </div>

      {/* Dashboard content */}
      <div className="p-5 md:p-6">
        <svg
          viewBox="0 0 900 480"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Operational Intelligence Dashboard"
        >
          <defs>
            <pattern id="dash-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="900" height="480" fill="url(#dash-grid)" />

          {/* Left panel: Navigation */}
          <rect x="0" y="0" width="160" height="480" fill="rgba(0,0,0,0.2)" />
          <rect x="0" y="0" width="160" height="480" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

          <text x="20" y="30" fill="rgba(201,162,39,0.8)" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">MAYA AI OPS</text>

          {['Overview', 'Workflows', 'Agents', 'Documents', 'Spatial', 'Alerts', 'Settings'].map((item, i) => (
            <g key={i}>
              <rect x="8" y={50 + i * 38} width="144" height="30" rx="2"
                fill={i === 0 ? 'rgba(201,162,39,0.12)' : 'transparent'}
                stroke={i === 0 ? 'rgba(201,162,39,0.25)' : 'transparent'} />
              <text x="22" y={70 + i * 38} fill={i === 0 ? 'rgba(201,162,39,0.9)' : 'rgba(255,255,255,0.35)'}
                fontSize="8" fontFamily="sans-serif">{item}</text>
              {i === 0 && <rect x="8" y={50 + i * 38} width="3" height="30" rx="1" fill="rgba(201,162,39,0.8)" />}
            </g>
          ))}

          {/* Status badge */}
          <rect x="12" y="430" width="136" height="24" rx="2" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.2)" strokeWidth="0.5" />
          <circle cx="24" cy="442" r="3" fill="rgba(34,197,94,0.7)" />
          <text x="32" y="446" fill="rgba(34,197,94,0.7)" fontSize="7" fontFamily="monospace">OPERATIONAL · 99.9%</text>

          {/* Main content area */}
          {/* Top metrics row */}
          {[
            { label: 'Active Workflows', value: '147', delta: '+12%' },
            { label: 'Agents Running', value: '38', delta: '+5' },
            { label: 'Documents Processed', value: '2.4K', delta: 'Today' },
            { label: 'Alerts Resolved', value: '99.2%', delta: 'SLA' },
          ].map((metric, i) => (
            <g key={i}>
              <rect x={175 + i * 180} y="10" width="165" height="70" rx="2"
                fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <text x={258 + i * 180} y="38" textAnchor="middle"
                fill="rgba(255,255,255,0.85)" fontSize="18" fontFamily="sans-serif" fontWeight="bold">{metric.value}</text>
              <text x={258 + i * 180} y="52" textAnchor="middle"
                fill="rgba(255,255,255,0.38)" fontSize="7" fontFamily="sans-serif">{metric.label}</text>
              <text x={258 + i * 180} y="67" textAnchor="middle"
                fill="rgba(201,162,39,0.7)" fontSize="7" fontFamily="monospace">{metric.delta}</text>
            </g>
          ))}

          {/* Workflow activity chart */}
          <rect x="175" y="95" width="390" height="180" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
          <text x="195" y="117" fill="rgba(255,255,255,0.45)" fontSize="8" fontFamily="sans-serif" fontWeight="bold">WORKFLOW ACTIVITY</text>
          <text x="545" y="117" textAnchor="end" fill="rgba(255,255,255,0.2)" fontSize="7" fontFamily="monospace">Last 24h</text>

          {/* Chart bars */}
          {[0.4, 0.65, 0.5, 0.8, 0.7, 0.55, 0.9, 0.75, 0.6, 0.85, 0.7, 0.95].map((h, i) => (
            <g key={i}>
              <rect
                x={195 + i * 28} y={245 - h * 100} width="18" height={h * 100}
                rx="1"
                fill={i === 11 ? 'rgba(201,162,39,0.7)' : 'rgba(201,162,39,0.25)'}
              />
            </g>
          ))}

          {/* Chart x-axis */}
          <line x1="185" y1="248" x2="555" y2="248" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />

          {/* Right panel: Agent status */}
          <rect x="580" y="95" width="310" height="180" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
          <text x="600" y="117" fill="rgba(255,255,255,0.45)" fontSize="8" fontFamily="sans-serif" fontWeight="bold">AGENT STATUS</text>

          {[
            { name: 'Document Processor', status: 'Running', load: 0.72 },
            { name: 'Workflow Orchestrator', status: 'Running', load: 0.45 },
            { name: 'Compliance Checker', status: 'Running', load: 0.88 },
            { name: 'Spatial Monitor', status: 'Idle', load: 0.12 },
          ].map((agent, i) => (
            <g key={i}>
              <text x="600" y={140 + i * 32} fill="rgba(255,255,255,0.55)" fontSize="7.5" fontFamily="sans-serif">{agent.name}</text>
              <text x="840" y={140 + i * 32} textAnchor="end"
                fill={agent.status === 'Running' ? 'rgba(34,197,94,0.7)' : 'rgba(255,255,255,0.3)'}
                fontSize="7" fontFamily="monospace">{agent.status}</text>
              {/* Load bar */}
              <rect x="600" y={145 + i * 32} width="240" height="5" rx="2" fill="rgba(255,255,255,0.05)" />
              <rect x="600" y={145 + i * 32} width={240 * agent.load} height="5" rx="2"
                fill={agent.load > 0.8 ? 'rgba(201,162,39,0.7)' : 'rgba(201,162,39,0.4)'} />
            </g>
          ))}

          {/* Bottom section: Recent items */}
          <rect x="175" y="290" width="715" height="175" rx="2" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <text x="195" y="312" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="sans-serif" fontWeight="bold">RECENT ACTIVITY</text>

          {[
            { time: '14:32', action: 'Document batch processed', count: '847 files', type: 'INFO' },
            { time: '14:28', action: 'Compliance check completed', count: 'Q4 audit batch', type: 'OK' },
            { time: '14:15', action: 'Workflow SLA threshold', count: 'Auto-escalated', type: 'WARN' },
            { time: '13:58', action: 'Spatial data ingested', count: '12 regions updated', type: 'INFO' },
          ].map((item, i) => (
            <g key={i}>
              <rect x="185" y={322 + i * 34} width="705" height="28" rx="1"
                fill={i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent'} />
              <text x="200" y={340 + i * 34} fill="rgba(255,255,255,0.28)" fontSize="7" fontFamily="monospace">{item.time}</text>
              <text x="250" y={340 + i * 34} fill="rgba(255,255,255,0.55)" fontSize="7.5" fontFamily="sans-serif">{item.action}</text>
              <text x="600" y={340 + i * 34} fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="sans-serif">{item.count}</text>
              <text x="870" y={340 + i * 34} textAnchor="end"
                fill={item.type === 'OK' ? 'rgba(34,197,94,0.6)' : item.type === 'WARN' ? 'rgba(251,191,36,0.7)' : 'rgba(255,255,255,0.3)'}
                fontSize="7" fontFamily="monospace">{item.type}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="px-5 pb-4 md:px-6">
        <p className="text-[10px] font-mono text-white/20 text-center">
          Illustrative operational dashboard — Maya AI Sovereign Platform
        </p>
      </div>
    </div>
  );
}
