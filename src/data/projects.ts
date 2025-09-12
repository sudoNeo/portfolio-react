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
      { heading: 'System Architecture', body: 'Engineered dual-microcontroller architecture with master AtMega handling 10Hz ADC sensor acquisition and slave AtMega executing PID control loop, communicating over SPI protocol to maintain real-time pressure regulation within ±5 PSI tolerance across 0-1000 PSI operating range.' },
      { heading: 'Control Implementation', body: 'Developed bare-metal PID controller with rate-limited servo actuation at 50Hz PWM frequency, implementing anti-windup and derivative kick prevention to protect mechanical components while maintaining stable pressure control during rapid boil-off transients.' },
      { heading: 'Safety & Calibration', body: 'Implemented multi-stage sensor calibration pipeline (ADC→mV→PSI) with drift compensation, integrated one-button emergency shutdown sequence that safely vents system pressure, and built real-time LCD display showing setpoint, actual pressure, and system status for operator monitoring.' },
      { heading: 'Performance Results', body: 'Achieved deterministic 10ms task scheduling with zero timing jitter, maintained ±5 PSI regulation accuracy during extended burn tests, and enabled consistent propellant delivery contributing to successful static fires and first-place FAR competition win.' },
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
      { heading: 'Hardware Integration', body: 'Researched and implemented LabJack T7 multiplexer system to address previous 10Hz sampling bottleneck, architecting solution supporting 13+ simultaneous channels (6 pressure transducers, 4 S-type load cells, 3 K/J-type thermocouples) with 100Hz data logging and 10Hz live visualization, replacing limited-channel hardware with scalable software-defined acquisition.' },
      { heading: 'Software Development', body: 'Developed PyQt multi-platform control interface integrating actuation/igniter logic with XBee telemetry for remote operations, implementing live thrust curves and fill data visualization with InfluxDB time-series storage and binary file backup, enabling instantaneous analysis that previously required hours of post-processing and directly informed combustion chamber sizing decisions.' },
      { heading: 'Modular Infrastructure', body: 'Designed industry-standard wire harness system with software-configurable channels and hot-swappable sensor capability, reducing sensor replacement time from hours to minutes during critical tests, while implementing comprehensive safety interlocks with automated out-of-range triggers ensuring safe pre-fill sequences and post-test site approaches.' },
      { heading: 'Team Leadership & DevOps', body: 'Led 15+ engineer sub-team using Agile/Scrum methodology with GitLab CI/CD pipeline for automated builds and testing, maintained Kanban boards for feature tracking, and documented safety procedures enabling all system engineers to operate DAQ independently, delivering system on schedule for successful static fires, burst tests, and first-place FAR competition victory.' },
      { heading: 'Mission Impact', body: 'Enabled remote operation eliminating personnel exposure to hazardous test conditions, supported multiple successful static fires achieving target chamber pressures, validated thrust measurements confirming 98% theoretical ISP, and provided critical data for iterative design improvements resulting in most efficient liquid engine in competition category.' },
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
      { heading: 'Performance Scaling', body: 'Architected multi-process UDP streaming pipeline replacing single-threaded 1 kHz data logger, achieving 1.25 MHz sustained acquisition rate (1000x improvement) through zero-copy packet processing, lock-free ring buffers, and process-per-instrument isolation supporting concurrent Stanford Research Systems devices.' },
      { heading: 'Network Optimization', body: 'Implemented adaptive auto-throttling algorithm monitoring network buffer occupancy and CPU utilization in real-time, dynamically adjusting streaming rates to maintain <0.1% packet loss (reduced from 15%) while sustaining 160 Mbps throughput by tuning socket buffer sizes and implementing custom packet batching.' },
      { heading: 'Kernel-Level Tuning', body: 'Diagnosed softirq bottlenecks causing periodic 50ms latency spikes using ftrace and perf analysis, implemented CPU isolation via isolcpus kernel parameter, configured Transmit Packet Steering (XPS) for dedicated NIC hardware queues, and enabled Receive Flow Steering (RFS) to eliminate cross-CPU cache invalidation.' },
      { heading: 'Reliability Engineering', body: 'Built automatic recovery mechanisms handling network disconnections and instrument power cycles, implemented circular buffer overflow protection with graceful degradation, and added comprehensive metrics collection via Prometheus for monitoring packet rates, buffer utilization, and processing latency.' },
      { heading: 'Production Deployment', body: 'Delivered system processing 100+ GB/day of lock-in amplifier data with 99.9% uptime over 6 months, enabling researchers to increase experiment throughput by 10x while maintaining measurement precision, with deployment automated via systemd service management and real-time performance dashboards.' },
    ],
  }
];

