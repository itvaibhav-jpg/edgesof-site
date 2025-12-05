'use client';

import { HiLocationMarker, HiBriefcase, HiClock, HiArrowRight } from 'react-icons/hi';
import { FaUsers, FaRocket, FaHeart, FaGraduationCap } from 'react-icons/fa';
import Link from 'next/link';

export default function Careers() {
  const benefits = [
    {
      icon: FaRocket,
      title: 'Innovation First',
      description: 'Work with cutting-edge AI and cloud technologies on challenging projects',
    },
    {
      icon: FaGraduationCap,
      title: 'Continuous Learning',
      description: 'Access to training, certifications, and conferences to grow your skills',
    },
    {
      icon: FaHeart,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and generous time-off policies',
    },
    {
      icon: FaUsers,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive environment',
    },
  ];

  const openings = [
    {
      title: 'Senior AI/ML Engineer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Build and deploy AI models for enterprise automation and intelligent systems.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud architectures for enterprise clients.',
      skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform'],
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop modern web applications using React, Node.js, and cloud technologies.',
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain CI/CD pipelines and cloud infrastructure.',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Monitoring'],
    },
    {
      title: 'Data Engineer',
      department: 'Data & Analytics',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and build data pipelines and analytics infrastructure.',
      skills: ['Python', 'Spark', 'Airflow', 'SQL', 'Data Warehousing'],
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive product strategy and roadmap for our enterprise platforms.',
      skills: ['Product Strategy', 'Agile', 'Analytics', 'Stakeholder Management'],
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional quality to our clients.',
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve complex problems.',
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our interactions.',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to achieve great outcomes.',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/30 rounded-md text-cyan-glow text-sm font-semibold uppercase tracking-wide">
              Join Our Team
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-white">Build Your </span>
            <span className="text-gradient">Career</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join a team of passionate innovators building the future of enterprise technology. 
            Work on challenging projects that make a real impact.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="cyber-card p-6 text-center hover:glow-border transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-glow/20 to-aqua-bright/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-cyan-glow" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className="cyber-card p-6 lg:p-8 hover:glow-border transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-glow transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <HiBriefcase className="w-4 h-4 text-cyan-glow" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiLocationMarker className="w-4 h-4 text-cyan-glow" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiClock className="w-4 h-4 text-cyan-glow" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-navy-dark/50 border border-white/10 rounded-full text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <div className="text-sm text-gray-400 mb-4">
                      {job.experience} experience
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark font-semibold rounded-md hover:shadow-lg hover:shadow-cyan-glow/50 transition-all"
                    >
                      Apply Now
                      <HiArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="cyber-card p-8 lg:p-12 mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-cyan-glow mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 cyber-card p-12 bg-gradient-to-r from-cyan-glow/5 to-aqua-bright/5">
          <h2 className="text-4xl font-bold text-white">
            Don't See the Right Role?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link href="/contact" className="inline-block btn-primary">
            Send Your Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
