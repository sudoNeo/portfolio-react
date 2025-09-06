# Marlon Lopez - Engineering Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing engineering projects and technical expertise.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Interactive Elements**: 
  - Animated skill chips with hover effects
  - Circular headshot with flip animation
  - Project image slideshows
  - Smooth transitions and animations
- **Project Showcase**:
  - Auto Valve Regulator (PID) with Mermaid system architecture diagram
  - Data Acquisition System with interactive slideshow
  - Laboratory Daemon with high-speed streaming capabilities
- **Technical Stack**: React, TypeScript, Tailwind CSS, React Router, Mermaid

## Projects

### Auto Valve Regulator (PID)
- Closed-loop propellant-tank pressure regulator
- Dual-Arduino architecture with SPI communication
- Real-time control with 10ms task scheduler
- YouTube demo video and system architecture diagram

### Data Acquisition System (LabJack + Qt/QML)
- Safety-critical DAQ system for remote operation
- Multi-threaded Python/Qt GUI application
- Real-time monitoring and emergency shutdown capabilities
- Interactive image slideshow

### Laboratory Daemon – High-Speed Data Streaming
- 1000x performance improvement (1 kHz → 1.25 MHz)
- Multi-process UDP streaming pipeline
- Kernel-level network stack optimization
- 99.9% uptime for scientific data processing

## Skills

- **Programming**: C/C++, Python
- **Systems**: Network Programming, Data Acquisition, RTOS
- **Advanced**: Multi-threaded/Processes, Kernel Tuning

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sudoNeo/portfolio-react.git
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Deployment

This portfolio is optimized for deployment on platforms like:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Environment Variables

No environment variables are required for basic deployment.

## Contact

- **Email**: mlope589@ucr.edu
- **GitHub**: [sudoNeo](https://github.com/sudoNeo)
- **LinkedIn**: [marlon-l](https://www.linkedin.com/in/marlon-l)

## License

This project is open source and available under the [MIT License](LICENSE).
