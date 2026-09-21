export interface TelemetryRegion {
  id: string;
  name: string;
  code: string;
  provider: 'aws' | 'gcp' | 'azure' | 'onprem';
  status: 'optimal' | 'healthy' | 'degraded' | 'failover';
  latencyMs: number;
  uptime90d: number;
  nodes: number;
  activePods: number;
  trafficRps: number;
}

export interface MetricCardData {
  id: string;
  label: string;
  value: string;
  trend: string;
  trendPositive: boolean;
  benchmark: string;
  codeTag: string;
  category: 'sla' | 'mttr' | 'finops' | 'scale' | 'edge' | 'dr';
  sparkline: number[];
  drilldownDetails: {
    description: string;
    subMetrics: { key: string; val: string }[];
    architecturalImpact: string;
  };
}

export interface TopologyNode {
  id: string;
  layer: 'edge' | 'ingress' | 'compute' | 'data' | 'observability';
  name: string;
  type: string;
  status: 'optimal' | 'warning' | 'standby' | 'failover';
  provider: string;
  region: string;
  specs: string;
  throughput: string;
  latency: string;
  replicaCount: number;
  description: string;
  redundancy: string;
  tags: string[];
}

export interface IncidentCaseStudy {
  id: string;
  title: string;
  category: 'Reliability' | 'Security' | 'FinOps' | 'Architecture';
  severity: 'P0' | 'P1' | 'Major Migration';
  date: string;
  duration: string;
  mttr: string;
  summary: string;
  rootCause: string;
  detectionTime: string;
  automatedActions: string[];
  preventativeMeasures: string[];
  impactPrevented: string;
}

export interface FinOpsCategory {
  name: string;
  currentMonthly: number;
  optimizedMonthly: number;
  annualSavings: number;
  reductionPercentage: number;
  keyInitiative: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary?: string;
  highlights: string[];
}

export interface TechnicalSkillDomain {
  domain: string;
  skills: string;
}

export interface CompetencyGroup {
  name: string;
  skills: string;
}

export interface Education {
  degree: string;
  year: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  status: 'Certified' | 'In Progress';
  date?: string;
}
