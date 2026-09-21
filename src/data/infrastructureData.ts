import {
  TelemetryRegion,
  MetricCardData,
  TopologyNode,
  IncidentCaseStudy,
  FinOpsCategory,
  Certification,
  WorkExperience,
  TechnicalSkillDomain,
  CompetencyGroup,
  Education,
} from '../types';

export const EXECUTIVE_PROFILE = {
  name: 'Janmejay Mohapatra',
  title: 'IT Infrastructure Team Lead',
  subtitle: 'Hybrid Cloud • ERP Environments • Incident & Problem Management • IT Service Delivery',
  phone: '+91-7978569005',
  email: 'janmejay@binaryx.me',
  linkedin: 'linkedin.com/in/janmejay-mohapatra-881b6b1a9',
  linkedinUrl: 'https://linkedin.com/in/janmejay-mohapatra-881b6b1a9',
  location: 'Mumbai, India',
  headshotUrl: '/janmejay-headshot.jpg',
  summary:
    'Results-driven IT Infrastructure Team Lead with 10+ years of experience managing hybrid cloud infrastructure, ERP environments, and cross-functional support teams. Expert in infrastructure management, incident and problem management, disaster recovery planning, and IT service delivery. Proven track record: 30% reduction in system downtime, 20% faster ticket resolution, and 99.5%+ uptime across managed environments. Skilled in Azure Active Directory, network security, endpoint protection, and IT automation with a strong focus on aligning IT strategy with business goals. ITIL Foundation certified (in progress). Adept at team mentoring, stakeholder communication, and driving operational excellence.',
  keyStats: [
    { label: 'System Uptime', value: '99.5%+', sub: 'Sustained across Cloud-based ERP' },
    { label: 'Downtime Reduction', value: '30%', sub: 'Proactive Monitoring & Automated Recovery' },
    { label: 'Ticket Resolution', value: '20% Faster', sub: 'Team Mentoring & Knowledge Base' },
    { label: 'Unplanned Outages', value: '-40%', sub: 'Change Management Enforcement' },
  ],
};

export const CORE_COMPETENCIES: CompetencyGroup[] = [
  {
    name: 'Infrastructure & Cloud',
    skills:
      'IT Infrastructure Management, Hybrid Cloud, Microsoft Azure, Azure AD, Active Directory, Virtualization (Hyper-V, VMware), Server Administration, Network Administration, Storage Management, Backup & Disaster Recovery, Business Continuity Planning, RTO/RPO, Capacity Planning, Data Center Operations',
  },
  {
    name: 'Networking',
    skills:
      'TCP/IP, DNS, DHCP, VLAN, Routing & Switching, VPN, Firewall Management, Network Security, CCNA',
  },
  {
    name: 'Security & Compliance',
    skills:
      'Endpoint Security, ESET Administration, Zero Trust Architecture, Security Audits, Patch Management, Compliance, IT Security Policy',
  },
  {
    name: 'Monitoring & Tools',
    skills:
      'System Monitoring, Incident Detection, Ticketing Systems (ServiceNow, Jira, Wrike, Zendesk), Remote Desktop Tools, SolarWinds / PRTG',
  },
  {
    name: 'Operating Systems',
    skills: 'Windows Server (2012-2022), Linux (Ubuntu, CentOS), Windows 10/11',
  },
  {
    name: 'Leadership & Process',
    skills:
      'Team Leadership, Team Management, Mentoring, Incident Management, Problem Management, Change Management, ITIL Framework, ITSM, SLA Management, KPI Tracking, Project Management, Cross-functional Collaboration, Stakeholder Management, Vendor Management',
  },
];

export const PROFESSIONAL_EXPERIENCE: WorkExperience[] = [
  {
    role: 'IT Infrastructure Team Lead',
    company: 'JDAS Cloud-based ERP',
    period: 'Jan 2021 – Present',
    highlights: [
      'Reduced system downtime by 30% by implementing proactive monitoring, automated failover, and root-cause analysis protocols',
      'Improved ticket resolution speed by 20% through structured team mentoring, knowledge-base documentation, and weekly skill-building sessions',
      'Drive disaster recovery and business continuity planning; maintain RTO/RPO targets through regular DR drills and backup validation',
      'Manage full infrastructure lifecycle — servers, networks, storage, and cloud resources — achieving 99.5%+ uptime',
      'Collaborate with business stakeholders to translate requirements into scalable infrastructure solutions; lead cross-functional project delivery',
      'Oversee endpoint security via ESET administration, security policy enforcement, and compliance audits',
      'Manage IT vendor relationships, hardware procurement, and budget planning',
      'Implemented change management processes reducing unplanned outages by 40%',
    ],
  },
  {
    role: 'Senior Customer Support Engineer / Acting Team Supervisor',
    company: 'TATA Housing',
    period: 'Jul 2016 – Jan 2021',
    highlights: [
      'Supervised a team of 6 desktop support engineers, managing escalations and ensuring 95% SLA adherence for L2 support',
      'Led incident response teams during critical outages; coordinated across IT, facilities, and business units for rapid restoration',
      'Improved end-user satisfaction scores by standardizing support documentation and step-by-step resolution guides',
      'Provided L2+ support for Windows Server, Linux (Ubuntu/CentOS), and network connectivity — resolved 95% of issues within SLA',
      'Owned the ITSM ticketing workflow in ServiceNow, identifying recurring patterns and driving problem management initiatives',
      'Conducted IT asset management, hardware provisioning, and software license tracking',
    ],
  },
  {
    role: 'Desktop Support Engineer (L2)',
    company: 'HDFC Project',
    period: 'Jan 2015 – Apr 2016',
    highlights: [
      'Resolved 30+ hardware/software tickets daily in a high-volume financial environment, maintaining SLA compliance',
      'Managed asset inventory and provisioning for 100+ users',
      'Created troubleshooting documentation that reduced repeat tickets by 15%',
    ],
  },
];

export const TECHNICAL_SKILLS: TechnicalSkillDomain[] = [
  {
    domain: 'Cloud & Virtualization',
    skills: 'Microsoft Azure, Azure Active Directory, Hyper-V, VMware (basic)',
  },
  {
    domain: 'Identity & Directory',
    skills: 'Active Directory, Azure AD Connect, Group Policy Management, DNS, DHCP',
  },
  {
    domain: 'Security',
    skills:
      'ESET Endpoint Security, Firewall Management (pfSense, Fortinet), VPN, Endpoint Protection, Security Audits, Patch Management',
  },
  {
    domain: 'Scripting & Automation',
    skills: 'PowerShell, Batch Scripting',
  },
  {
    domain: 'Monitoring',
    skills: 'Power BI (familiar), Event Viewer, Performance Monitoring',
  },
  {
    domain: 'Collaboration & PM',
    skills: 'Jira, ServiceNow, Wrike, Confluence, Zendesk',
  },
  {
    domain: 'Networking',
    skills: 'TCP/IP, DNS, DHCP, VLAN, Routing & Switching, VPN (CCNA level)',
  },
  {
    domain: 'Operating Systems',
    skills: 'Windows Server (2012-2022), Windows 10/11, Linux (Ubuntu, CentOS)',
  },
  {
    domain: 'Backup & DR',
    skills: 'Backup Solutions, Disaster Recovery Planning, Business Continuity',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'CCNA - Cisco Certified Network Associate',
    issuer: 'Cisco',
    status: 'Certified',
  },
  {
    id: 'cert-2',
    title: 'Hardware & Networking',
    issuer: 'Jetking, Bhubaneswar',
    status: 'Certified',
  },
  {
    id: 'cert-3',
    title: 'ITIL Foundation',
    issuer: 'AXELOS',
    status: 'In Progress',
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Commerce (B.Com)',
    year: '2012',
  },
];

export const KEY_ACHIEVEMENTS = [
  '30% reduction in infrastructure downtime through proactive monitoring and automated recovery',
  '20% improvement in team ticket resolution via structured mentorship and training programs',
  '99.5%+ system uptime sustained across cloud-based ERP environment',
  '95% SLA adherence for L2 support across 200+ end-users',
  '40% reduction in unplanned outages through implementation of change management processes',
  'Successfully led DR initiatives ensuring business continuity with measurable RTO/RPO compliance',
];

export const TELEMETRY_REGIONS: TelemetryRegion[] = [
  {
    id: 'azure-central-india',
    name: 'Microsoft Azure Central India (Pune)',
    code: 'AZURE:centralindia',
    provider: 'azure',
    status: 'optimal',
    latencyMs: 12,
    uptime90d: 99.95,
    nodes: 180,
    activePods: 1420,
    trafficRps: 8400,
  },
  {
    id: 'azure-south-india',
    name: 'Microsoft Azure South India (Chennai)',
    code: 'AZURE:southindia',
    provider: 'azure',
    status: 'optimal',
    latencyMs: 24,
    uptime90d: 99.92,
    nodes: 120,
    activePods: 890,
    trafficRps: 5600,
  },
  {
    id: 'dc-mumbai-onprem',
    name: 'ERP Data Center (Mumbai)',
    code: 'HYBRID:ERP-DC-MUM',
    provider: 'onprem',
    status: 'optimal',
    latencyMs: 4,
    uptime90d: 99.98,
    nodes: 64,
    activePods: 580,
    trafficRps: 6200,
  },
  {
    id: 'dr-site-blr',
    name: 'DR Standby Site (Bengaluru)',
    code: 'DR:HOT-STANDBY',
    provider: 'onprem',
    status: 'healthy',
    latencyMs: 18,
    uptime90d: 100.0,
    nodes: 48,
    activePods: 320,
    trafficRps: 1800,
  },
];

export const METRIC_CARDS: MetricCardData[] = [
  {
    id: 'metric-uptime',
    label: 'SYSTEM UPTIME SUSTAINED',
    value: '99.5%+',
    trend: 'Exceeds SLA target',
    trendPositive: true,
    benchmark: 'Cloud-Based ERP Environments',
    codeTag: 'JDAS_ERP_PROD_SLA',
    category: 'sla',
    sparkline: [99.2, 99.3, 99.4, 99.5, 99.55, 99.6, 99.62],
    drilldownDetails: {
      description:
        'Managed full infrastructure lifecycle spanning servers, networks, storage, and cloud resources across JDAS Cloud-based ERP.',
      subMetrics: [
        { key: 'Target ERP Availability', val: '99.50% SLA' },
        { key: 'Measured Performance', val: '99.62% Trailing Average' },
        { key: 'Environment Scope', val: 'Servers, Storage, Cloud & Network Core' },
      ],
      architecturalImpact:
        'Maintained high availability for transactional ERP users with zero unrecovered failures.',
    },
  },
  {
    id: 'metric-downtime',
    label: 'SYSTEM DOWNTIME REDUCTION',
    value: '30%',
    trend: 'Proactive monitoring impact',
    trendPositive: true,
    benchmark: 'Automated Failover & Root-Cause Protocols',
    codeTag: 'INFRA_DOWNTIME_OPTIMIZATION',
    category: 'mttr',
    sparkline: [100, 92, 85, 78, 74, 71, 70],
    drilldownDetails: {
      description:
        'Cut system downtime by 30% via proactive SolarWinds/PRTG monitoring, automated failover, and structured root-cause analysis (RCA).',
      subMetrics: [
        { key: 'Monitoring Suite', val: 'SolarWinds / PRTG / Event Viewer' },
        { key: 'Recovery Protocol', val: 'Automated Failover + Rapid RCA' },
        { key: 'Incident Resolution Speed', val: '20% faster team turnaround' },
      ],
      architecturalImpact:
        'Eliminated recurrent infrastructure bottlenecks and shortened time-to-restoration during critical disruptions.',
    },
  },
  {
    id: 'metric-outages',
    label: 'UNPLANNED OUTAGE REDUCTION',
    value: '40%',
    trend: 'Rigorous Change Management',
    trendPositive: true,
    benchmark: 'ITIL Framework & ITSM Alignment',
    codeTag: 'ITIL_CHANGE_MANAGEMENT',
    category: 'scale',
    sparkline: [100, 88, 76, 68, 63, 61, 60],
    drilldownDetails: {
      description:
        'Implemented strict change management workflows and CAB review processes that reduced unplanned infrastructure outages by 40%.',
      subMetrics: [
        { key: 'Process Standard', val: 'ITIL ITSM Framework' },
        { key: 'Risk Assessment', val: 'Mandatory Pre-Change Validation & Rollback Plans' },
        { key: 'Workflow Tool', val: 'ServiceNow & Jira Change Controls' },
      ],
      architecturalImpact:
        'Standardized release windows and verification checklists, virtually eliminating deployment-induced downtime.',
    },
  },
  {
    id: 'metric-tickets',
    label: 'TICKET RESOLUTION SPEED',
    value: '20% Faster',
    trend: 'Team Mentoring & Knowledge Base',
    trendPositive: true,
    benchmark: 'Weekly Skill-Building Sessions',
    codeTag: 'ITSM_TICKET_VELOCITY',
    category: 'edge',
    sparkline: [24, 22, 20, 19, 18, 17, 16],
    drilldownDetails: {
      description:
        'Improved ticket resolution speed by 20% through structured team mentoring, comprehensive knowledge-base documentation, and weekly skill-building.',
      subMetrics: [
        { key: 'Team Mentoring', val: 'Weekly skill-building workshops' },
        { key: 'Knowledge Base', val: 'Standardized SOPs & troubleshooting guides' },
        { key: 'Repeat Ticket Reduction', val: '15% drop via documentation' },
      ],
      architecturalImpact:
        'Empowered Tier 1 & 2 support engineers to resolve complex server, network, and directory issues independently.',
    },
  },
  {
    id: 'metric-sla',
    label: 'L2 SUPPORT SLA ADHERENCE',
    value: '95%',
    trend: 'Consistent SLA delivery',
    trendPositive: true,
    benchmark: '200+ Enterprise End-Users',
    codeTag: 'L2_SLA_ADHERENCE',
    category: 'finops',
    sparkline: [88, 90, 92, 93, 94, 95, 95.2],
    drilldownDetails: {
      description:
        'Supervised 6 desktop support engineers at TATA Housing and resolved 30+ daily tickets at HDFC Project, sustaining 95% SLA adherence across 200+ users.',
      subMetrics: [
        { key: 'Team Supervised', val: '6 Support Engineers (TATA Housing)' },
        { key: 'End-Users Supported', val: '200+ Enterprise Users' },
        { key: 'Daily Ticket Volume', val: '30+ hardware/software tickets (HDFC)' },
      ],
      architecturalImpact:
        'Established predictable escalations and rapid cross-functional coordination between IT, facilities, and business leadership.',
    },
  },
  {
    id: 'metric-dr',
    label: 'DISASTER RECOVERY & RTO/RPO',
    value: '100% Validated',
    trend: 'Regular DR Drills & Backup Tests',
    trendPositive: true,
    benchmark: 'Business Continuity Planning',
    codeTag: 'DR_BCP_VALIDATION',
    category: 'dr',
    sparkline: [80, 85, 90, 95, 98, 100, 100],
    drilldownDetails: {
      description:
        'Drove disaster recovery and business continuity planning, rigorously maintaining RTO/RPO targets through recurring DR drills and automated backup validation.',
      subMetrics: [
        { key: 'RTO / RPO Target', val: 'Strictly Compliant to Business Tier' },
        { key: 'Drill Cadence', val: 'Scheduled DR Drills & Failover Validation' },
        { key: 'Backup Integrity', val: 'Automated Integrity Check & Restoration Drills' },
      ],
      architecturalImpact:
        'Guaranteed operational continuity and disaster resilience across critical database and application nodes.',
    },
  },
];

export const TOPOLOGY_NODES: TopologyNode[] = [
  {
    id: 'node-edge-1',
    layer: 'edge',
    name: 'Fortinet / pfSense Perimeter Firewall',
    type: 'Network Security & VPN Gateway',
    status: 'optimal',
    provider: 'Fortinet / pfSense',
    region: 'Mumbai Data Center',
    specs: 'HA Active-Passive Pair, IPS/IDS, SSL-VPN Concentrator',
    throughput: 'Gigabit Wire-Speed Inspection',
    latency: '< 1ms internal perimeter',
    replicaCount: 2,
    description:
      'Perimeter firewall management, IPsec site-to-site tunnels to Azure, and secure SSL VPN access for remote workforce.',
    redundancy: 'Dual-WAN automatic failover & redundant hardware appliances',
    tags: ['Firewall', 'VPN', 'pfSense', 'Fortinet', 'Network Security'],
  },
  {
    id: 'node-ingress-1',
    layer: 'ingress',
    name: 'Azure Virtual Network & Hybrid VPN Gateway',
    type: 'Hybrid Cloud Interconnect',
    status: 'optimal',
    provider: 'Microsoft Azure',
    region: 'Central India (Pune)',
    specs: 'VNet Peering, Azure Route Tables, NSGs, Site-to-Site IPsec',
    throughput: '1.25 Gbps VPN Throughput',
    latency: '12ms hybrid RTT',
    replicaCount: 2,
    description:
      'Secure hybrid interconnect connecting on-premises ERP data center to Microsoft Azure resources with Network Security Groups (NSGs).',
    redundancy: 'Zone-redundant gateway architecture',
    tags: ['Microsoft Azure', 'Hybrid Cloud', 'VNet', 'Routing & Switching'],
  },
  {
    id: 'node-compute-1',
    layer: 'compute',
    name: 'Microsoft Azure & Hyper-V Virtualization Cluster',
    type: 'Hybrid Cloud & Virtualization',
    status: 'optimal',
    provider: 'Microsoft Azure / Hyper-V',
    region: 'Azure Central India & On-Premises',
    specs: 'Windows Server 2012-2022, Hyper-V, VMware ESXi',
    throughput: 'JDAS Cloud-based ERP Workloads',
    latency: 'Sub-millisecond Hypervisor Bus',
    replicaCount: 16,
    description:
      'Hosts core ERP application servers, web frontends, and database backends with automated failover and live migration capabilities.',
    redundancy: 'High Availability Hyper-V cluster with Azure Backup integration',
    tags: ['Azure', 'Hyper-V', 'VMware', 'Windows Server', 'ERP'],
  },
  {
    id: 'node-compute-2',
    layer: 'compute',
    name: 'Active Directory & Azure AD Connect',
    type: 'Identity & Directory Services',
    status: 'optimal',
    provider: 'Microsoft Azure AD / On-Prem AD',
    region: 'Hybrid Synchronized',
    specs: 'Domain Controllers (Windows Server 2022), Group Policy Objects (GPOs)',
    throughput: 'Enterprise Single Sign-On (SSO)',
    latency: '< 2ms auth response',
    replicaCount: 4,
    description:
      'Centralized identity management integrating on-premises Active Directory with Azure Active Directory via Azure AD Connect and GPOs.',
    redundancy: 'Multi-master Domain Controllers across physical & Azure nodes',
    tags: ['Active Directory', 'Azure AD', 'Azure AD Connect', 'GPO', 'DNS/DHCP'],
  },
  {
    id: 'node-data-1',
    layer: 'data',
    name: 'ERP Enterprise Storage & Backup Repository',
    type: 'Storage Management & Disaster Recovery',
    status: 'optimal',
    provider: 'SAN / NAS & Azure Blob Storage',
    region: 'Mumbai & DR Standby (Bengaluru)',
    specs: 'RAID 10 Storage Arrays, Snapshot Replication, Azure Cloud Backup',
    throughput: 'Scheduled RTO/RPO Compliance',
    latency: '0.5ms IOPS tier',
    replicaCount: 3,
    description:
      'Tiered storage management supporting ERP transactions with automated backup validation, retention schedules, and DR readiness.',
    redundancy: 'Offsite DR site backup replication and Azure cold archive',
    tags: ['Storage Management', 'Backup & DR', 'RTO/RPO', 'Business Continuity'],
  },
  {
    id: 'node-observability-1',
    layer: 'observability',
    name: 'SolarWinds & PRTG Network Monitor',
    type: 'Proactive Monitoring & Telemetry',
    status: 'optimal',
    provider: 'SolarWinds / PRTG / Event Viewer',
    region: 'Central NOC Operations',
    specs: 'SNMP, WMI, NetFlow, Performance Counters, Event Log Aggregation',
    throughput: 'Continuous Health Probes',
    latency: 'Real-time alert dispatch',
    replicaCount: 2,
    description:
      'Proactive monitoring stack detecting threshold anomalies, interface saturation, and hardware warnings to prevent downtime.',
    redundancy: 'Clustered monitoring probe architecture',
    tags: ['SolarWinds', 'PRTG', 'Monitoring', 'Event Viewer', 'Incident Detection'],
  },
];

export const INCIDENT_CASE_STUDIES: IncidentCaseStudy[] = [
  {
    id: 'inc-01',
    title: '30% Downtime Reduction via Proactive Monitoring & Automated Recovery',
    category: 'Reliability',
    severity: 'P0',
    date: 'JDAS Cloud-based ERP (2021 – Present)',
    duration: 'Multi-Phase Implementation',
    mttr: 'Rapid Automated Failover',
    summary:
      'Designed and executed a comprehensive infrastructure reliability initiative at JDAS Cloud-based ERP, slashing system downtime by 30%.',
    rootCause:
      'Legacy manual alerting allowed minor resource exhaustion and network blips to escalate into unexpected ERP system stalls.',
    detectionTime: 'Real-time proactive telemetry via SolarWinds and PRTG monitors.',
    automatedActions: [
      'Configured automated threshold alerts across memory, disk space, and CPU utilization on all ERP application servers.',
      'Configured automated service failover across redundant virtual hosts and Hyper-V hypervisors.',
      'Established standardized root-cause analysis (RCA) protocols following every anomaly.',
    ],
    preventativeMeasures: [
      'Instituted automated backup validation routines and routine capacity planning reviews.',
      'Documented step-by-step resolution SOPs empowering support engineers to resolve warning states before outages occur.',
    ],
    impactPrevented:
      'Sustained 99.5%+ uptime across the cloud-based ERP ecosystem, safeguarding mission-critical business transactions.',
  },
  {
    id: 'inc-02',
    title: '40% Outage Reduction via ITIL Change Management Protocols',
    category: 'Architecture',
    severity: 'P1',
    date: 'JDAS Cloud-based ERP',
    duration: 'Process Transformation',
    mttr: 'Eliminated Change Drift',
    summary:
      'Instituted formal ITIL Change Management procedures, slashing unplanned infrastructure outages by 40%.',
    rootCause:
      'Ad-hoc server updates and uncoordinated configuration adjustments during business hours caused cascading service interruptions.',
    detectionTime: 'Post-incident review highlighted correlation between untracked changes and weekend/evening outages.',
    automatedActions: [
      'Implemented mandatory change request workflows in ServiceNow and Jira with designated maintenance windows.',
      'Required documented rollback steps and peer review for all firewall rules, Active Directory GPO updates, and server patches.',
    ],
    preventativeMeasures: [
      'Established regular Change Advisory Board (CAB) reviews for any production-impacting configuration modification.',
      'Enforced automated pre-maintenance snapshots and post-change validation test scripts.',
    ],
    impactPrevented:
      'Reduced unplanned outages by 40% while enhancing change visibility across executive stakeholders and cross-functional teams.',
  },
  {
    id: 'inc-03',
    title: 'Zero-Trust Endpoint Security & ESET Administration Overhaul',
    category: 'Security',
    severity: 'P1',
    date: 'Enterprise Operations',
    duration: 'Organization-Wide Rollout',
    mttr: 'Zero Endpoint Breaches',
    summary:
      'Administered centralized ESET Endpoint Security, strict patch management, and network firewall policies across all managed devices.',
    rootCause:
      'Rising remote work footprint introduced diverse network endpoints and potential malware vectors to the corporate network.',
    detectionTime: 'Continuous ESET management console monitoring and automated vulnerability audits.',
    automatedActions: [
      'Deployed centralized ESET Endpoint Protection across Windows Server, Windows 10/11, and remote client machines.',
      'Enforced strict Group Policy Objects (GPOs) disabling unapproved USB devices, enforcing screen locks, and mandating complex password rotators.',
      'Configured pfSense/Fortinet firewall policies isolating guest, operational, and server VLANs.',
    ],
    preventativeMeasures: [
      'Implemented automated monthly patch management cycles for Windows and Linux servers.',
      'Conducted recurring security audits ensuring adherence to IT security policy standards.',
    ],
    impactPrevented:
      'Protected 200+ endpoints and internal ERP servers from ransomware, unauthorized access, and compliance violations.',
  },
  {
    id: 'inc-04',
    title: 'Disaster Recovery RTO/RPO Compliance & Hot-Standby Drill Leadership',
    category: 'Reliability',
    severity: 'Major Migration',
    date: 'Annual Operational Cadence',
    duration: 'Ongoing DR Drills',
    mttr: '< Documented Target RTO',
    summary:
      'Led comprehensive disaster recovery and business continuity planning, achieving 100% compliance with business RTO/RPO targets.',
    rootCause:
      'Compliance and business governance required verifiable proof of disaster recovery readiness and zero data loss exposure.',
    detectionTime: 'Quarterly disaster recovery validation schedule and synthetic failover simulations.',
    automatedActions: [
      'Configured automated snapshot replication between primary Mumbai data center and secondary DR hot-standby site.',
      'Implemented automated backup validation routines to ensure image files and SQL backups are restorable and uncorrupted.',
      'Orchestrated DNS and routing failover drills simulating primary data center disconnects.',
    ],
    preventativeMeasures: [
      'Updated Business Continuity Plans (BCP) with clear escalation matrix and emergency contact protocols.',
      'Maintained cross-platform documentation for Windows Server, Linux, and Azure cloud recovery.',
    ],
    impactPrevented:
      'Guaranteed continuous ERP business operations with verified zero-data-loss capabilities in compliance with enterprise risk standards.',
  },
];

export const FINOPS_DATA: FinOpsCategory[] = [
  {
    name: 'Hybrid Cloud & Server Capacity Planning',
    currentMonthly: 85000,
    optimizedMonthly: 59500,
    annualSavings: 306000,
    reductionPercentage: 30.0,
    keyInitiative: 'Hyper-V resource right-sizing & Azure instance optimization',
  },
  {
    name: 'Hardware Procurement & IT Vendor Contracts',
    currentMonthly: 42000,
    optimizedMonthly: 31500,
    annualSavings: 126000,
    reductionPercentage: 25.0,
    keyInitiative: 'Consolidated vendor relationships and volume hardware agreements',
  },
  {
    name: 'Software License Tracking & Asset Allocation',
    currentMonthly: 36000,
    optimizedMonthly: 27000,
    annualSavings: 108000,
    reductionPercentage: 25.0,
    keyInitiative: 'ServiceNow license reconciliation eliminating inactive seats',
  },
  {
    name: 'Unplanned Outage & Downtime Cost Avoidance',
    currentMonthly: 64000,
    optimizedMonthly: 38400,
    annualSavings: 307200,
    reductionPercentage: 40.0,
    keyInitiative: '40% reduction in unplanned outages via ITIL change governance',
  },
];

export const TERMINAL_PRESETS = [
  {
    cmd: 'Get-Service -Name "ADWS", "DNS", "Netlogon", "W32Time"',
    description: 'Verify Active Directory, DNS, and Domain Controller core services',
    output: `Status   Name               DisplayName
------   ----               -----------
Running  ADWS               Active Directory Web Services
Running  DNS                DNS Server
Running  Netlogon           Netlogon
Running  W32Time            Windows Time

[OK] All Domain Controller identity and directory services running normally.
Azure AD Connect Sync: In-Sync (Last Delta: 3m ago).`,
  },
  {
    cmd: 'Test-NetConnection -ComputerName "azure-hub-gateway" -Port 443',
    description: 'Check hybrid IPsec/VNet tunnel connectivity between Mumbai DC and Azure',
    output: `ComputerName     : azure-hub-gateway
RemoteAddress    : 10.200.0.4
RemotePort       : 443
InterfaceAlias   : Hybrid-IPsec-Tun0
SourceAddress    : 192.168.10.1
TcpTestSucceeded : True

PingSucceeded    : True
RoundTripTime    : 12 ms
[OK] Hybrid Cloud site-to-site IPsec connection verified. Zero packet drops.`,
  },
  {
    cmd: 'prtg-cli get-status --group "ERP-Production-Cluster"',
    description: 'Inspect SolarWinds / PRTG monitoring probes across ERP infrastructure',
    output: `PROBE ID   DEVICE NAME              SENSOR                   STATUS    LAST VALUE
---------- -----------------------  -----------------------  --------  ----------
PRTG-01    JDAS-ERP-APP-01          CPU Utilization          OK        28.4%
PRTG-02    JDAS-ERP-APP-01          Memory Usage             OK        62.1%
PRTG-03    JDAS-ERP-DB-PRIMARY      Free Disk Space (D:\\)    OK        184 GB (38% Free)
PRTG-04    FORTINET-FW-CLUSTER      Interface Traffic WAN1   OK        142 Mbps / 1 Gbps
PRTG-05    ESET-SECURITY-MGMT       Client Protection State  OK        100% Up-to-date

[STATUS] 5/5 Probes Reporting Healthy. System Downtime: 0 min (30-day window).`,
  },
  {
    cmd: 'Get-ADUser -Filter * -Properties LastLogonDate, Enabled | Measure-Object',
    description: 'Audit enterprise users, active directory objects, and provisioning count',
    output: `Count    : 214
Average  :
Sum      :
Maximum  :
Minimum  :
Property :

[AUDIT COMPLETE] 214 active enterprise directory objects managed.
L2 SLA Adherence: 95% across all 200+ users. ESET Endpoint Protection active on all endpoints.`,
  },
];
