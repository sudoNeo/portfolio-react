export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  repo?: string;
  hero?: string | string[];
  video?: string;
  mermaid?: string;
  sections?: { heading: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: 'auto-valve',
    title: 'Auto Valve Regulator (PID)',
    description: 'Built a closed-loop propellant-tank pressure regulator to counter boil-off–induced pressure drift as liquid fuel evaporates; dual-AtMega (sense/control split) over SPI, PID servo-valve control, LCD status UI; holds setpoint ±5 PSI. Implemented sensor calibration (ADC→mV→PSI), rate-limited actuation to protect hardware, and a one-button safe-shutdown. Achieved deterministic timing with a 10 ms task scheduler; 10 Hz sensing & control, 50 Hz PWM servo actuation; ±5 PSI tolerance at 20 PSI setpoint.',
    image: '/assets/projects/valve/cover.png',
    hero: ['/assets/projects/valve/hero.png', '/assets/projects/valve/hero2.png', '/assets/projects/valve/hero3.png'],  
    video: 'https://www.youtube.com/watch?v=mFmePYNhHNs',
    repo: 'https://github.com/sudoNeo/pressure-regulator',
    mermaid: `---
config:
  flowchart:
    curve: stepAfter
  layout: dagre
  theme: redux
  look: classic
---
flowchart TB
 subgraph Master_AtMega["Master_AtMega"]
        Master_Task0["ADC Reading 100ms"]
        Master_Task1["SPI Transmission 100ms"]
        adc_value{"adc_value"}
        new_adc_ready{"new_adc_ready"}
  end
 subgraph Slave_AtMega["Slave_AtMega"]
        SPI_ISR["SPI ISR"]
        Slave_Task0["Data Processing 100ms"]
        Slave_Task1["LCD Display 1000ms"]
        Slave_Task2["PI Control 100ms"]
        Slave_Task3["Button Handler 50ms"]
        received_adc{"received_adc"}
        new_data_ready{"new_data_ready"}
        processed_adc{"processed_adc"}
        voltage_mv{"voltage_mv"}
        system_off{"system_off"}
        sensor_pressure{"sensor_pressure"}
  end
    A0["A0"] --> Master_Task0
    Master_Task1 --> PB5_SCK["PB5 SCK"] & PB3_MOSI["PB3 MOSI"] & PB2_SS["PB2 SS"]
    PB5_SCK --> SPI_ISR
    PB3_MOSI --> SPI_ISR
    PB2_SS --> SPI_ISR
    Slave_Task1 --> PD2-PD7["PD2-PD7 LCD"]
    Slave_Task2 --> PB1_OC1A["PB1 ServoControl"]
    PC5["PC5"] --> Slave_Task3
    Master_Task0 --> adc_value & new_adc_ready
    adc_value --> Master_Task1
    new_adc_ready <--> Master_Task1
    Master_Task1 == SPI ==> SPI_ISR
    SPI_ISR --> received_adc & new_data_ready
    new_data_ready <--> Slave_Task0
    received_adc --> Slave_Task0
    Slave_Task0 --> processed_adc & voltage_mv & sensor_pressure
    processed_adc --> Slave_Task1
    voltage_mv --> Slave_Task1
    sensor_pressure --> Slave_Task1 & Slave_Task2
    system_off --> Slave_Task1 & Slave_Task2
    Slave_Task3 --> system_off`,
    sections: [
      { heading: 'Problem', body: 'Counter boil-off–induced pressure drift in propellant tanks as liquid fuel evaporates, requiring precise pressure regulation to maintain system stability.' },
      { heading: 'Approach', body: 'Dual-AtMega architecture with sense/control split over SPI communication, PID servo-valve control, sensor calibration (ADC→mV→PSI), rate-limited actuation for hardware protection, and one-button safe-shutdown functionality.' },
      { heading: 'Results', body: 'Achieved ±5 PSI tolerance at 20 PSI setpoint with deterministic 10 ms task scheduler, 10 Hz sensing & control, and 50 Hz PWM servo actuation.' },
    ],
  },
  {
    slug: 'daq',
    title: 'Data Acquisition System (LabJack + Qt/QML)',
    description: 'Designed and deployed safety-critical DAQ system that successfully enabled remote operation of actuation across multiple static fire tests and vehicle launch. System eliminated need for personnel proximity to hazardous test hardware while providing real-time monitoring and emergency shutdown capabilities for mission-critical operations. Led end-to-end development of mission-critical control and data acquisition system from concept through deployment for Cold Flow, Static Fire, and Launch operations. Performed precision calibration of all pressure transducers, load cells, and thermocouples ensuring measurement accuracy for critical test data. Developed multi-threaded GUI application (Python/Qt) with real-time data visualization, safety monitoring, and remote wireless control capabilities up to several hundred meters.',
    image: '/assets/projects/daq/cover.png',
    hero: ['/assets/projects/daq/hero.png', '/assets/projects/daq/hero1.png'],
    repo: 'https://github.com/Highlander-Space-Program/DAQPY',
    sections: [
      { heading: 'Problem', body: 'Need for safe, remote operation of hazardous test hardware during static fire tests and vehicle launches, requiring real-time monitoring and emergency shutdown capabilities.' },
      { heading: 'Approach', body: 'End-to-end development of mission-critical control and data acquisition system with precision sensor calibration, multi-threaded Python/Qt GUI, and wireless remote control architecture.' },
      { heading: 'Results', body: 'Successfully enabled remote operation across multiple static fire tests and vehicle launches, eliminating personnel proximity to hazardous hardware while providing real-time monitoring and emergency shutdown capabilities up to several hundred meters.' },
    ],
  },
  {
    slug: 'barsukov-data',
    title: 'Laboratory Daemon – High-Speed Data Streaming',
    description: 'Transformed single-threaded 1 kHz data logger into distributed 1 MHz streaming platform, enabling faster experiments while eliminating data loss for critical scientific measurements through kernel-level network stack optimization. Scaled data acquisition from 1 kHz to 1.25 MHz (1000x improvement) by architecting multi-process UDP streaming pipeline with zero-copy packet processing. Reduced packet loss from 15% to <0.1% through auto-throttling that analyzes network/CPU bottlenecks in real-time and adjusts streaming rates. Built process-per-instrument architecture supporting concurrent devices. Achieved 160 Mbps sustained throughput by optimizing socket buffers and implementing lock-free queues. Diagnosed OS-level softirq bottlenecks causing periodic packet loss; implemented CPU isolation, Transmit Packet Steering for dedicated NIC queues, and Receive Flow Steering to eliminate kernel scheduling interference. Delivered production system processing 100+ GB/day of scientific data with 99.9% uptime for Stanford Research Systems equipment.',
    image: '/assets/projects/lab/cover.png',
    hero: '/assets/projects/lab/hero.png',
    repo: 'https://github.com/sudoNeo/lockinReader',
    sections: [
      { heading: 'Problem', body: 'Single-threaded 1 kHz data logger causing data loss and limiting experiment throughput for critical scientific measurements.' },
      { heading: 'Approach', body: 'Architected multi-process UDP streaming pipeline with zero-copy packet processing, auto-throttling, process-per-instrument architecture, and kernel-level network stack optimization including CPU isolation and packet steering.' },
      { heading: 'Results', body: 'Scaled from 1 kHz to 1.25 MHz (1000x improvement), reduced packet loss from 15% to <0.1%, achieved 160 Mbps sustained throughput, and delivered production system processing 100+ GB/day with 99.9% uptime.' },
    ],
  }
];

