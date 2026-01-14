
import { Course, CheckpointData } from './types';

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Gestión de Sistemas de Seguridad de la Información",
    description: "Marco normativo ISO/IEC 27001, gestión de riesgos, políticas de seguridad, controles técnicos y organizativos, auditorías y cumplimiento legal.",
    certification: "ISO/IEC 27001 Foundation / CompTIA Security+",
    icon: "🛡️"
  },
  {
    id: 2,
    title: "Virtualización y Cloud Computing",
    officialName: "Tecsup – Cloud and Virtualization Concepts",
    link: "https://www.netdevgroup.com/online/courses/virtualization/cloud-and-virtualization-concepts",
    description: "Fundamentos de virtualización (VMware, Hyper-V, KVM), arquitectura cloud (IaaS, PaaS, SaaS), servicios de AWS/Azure y migración a la nube.",
    certification: "NetDev Group – Cloud & Virtualization Concepts / AWS Cloud Practitioner",
    icon: "☁️"
  },
  {
    id: 3,
    title: "Implementación e integración de tecnologías emergentes",
    description: "Evaluación e integración de tecnologías como IA aplicada a redes, edge computing, blockchain para seguridad, 5G y redes definidas por software (SDN).",
    certification: "Cisco DevNet Associate / Microsoft Azure Fundamentals",
    icon: "🚀"
  },
  {
    id: 4,
    title: "Interoperabilidad con Redes Industriales",
    description: "Protocolos industriales (Modbus, PROFINET, DNP3), arquitectura OT/IT, seguridad en entornos SCADA, integración con redes corporativas y ciberseguridad industrial.",
    certification: "ISA/IEC 62443 Cybersecurity Specialist / Cisco CyberOps",
    icon: "🏭"
  },
  {
    id: 5,
    title: "Comunicaciones Inalámbricas",
    description: "Estándares Wi-Fi (802.11ax/Wi-Fi 6), Bluetooth, Zigbee, redes celulares (4G/5G), diseño de redes inalámbricas, seguridad WPA3 y análisis de espectro.",
    certification: "CWNA (Certified Wireless Network Administrator) / CompTIA Network+",
    icon: "📶"
  }
];

export const CHECKPOINT: CheckpointData = {
  title: "Checkpoint del Ciclo 6 – Proyecto Final de Grado",
  description: "Diseña e implementa una infraestructura híbrida (on-premise + cloud) con monitoreo, automatización, seguridad perimetral e integración de tecnologías emergentes (IoT, redes inalámbricas y sistemas industriales)."
};

export const THEME = {
  courseBg: '#6a041a',
  checkpointBg: '#9a0526',
  accent: '#ab022f'
};
