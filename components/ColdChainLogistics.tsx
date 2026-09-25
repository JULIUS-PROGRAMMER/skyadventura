'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Thermometer, ShieldCheck, Truck, Clock, RefreshCw, FileText, CheckCircle2 } from 'lucide-react';

export default function ColdChainLogistics() {
  const [selectedSensor, setSelectedSensor] = useState<'vault' | 'freezer' | 'reefer'>('vault');

  const sensorData = {
    vault: {
      name: 'Main Vaccine Cold Room (Lusaka Hub)',
      location: 'Plot 5147 Washama Rd, Warehouse B',
      temp: '+3.8°C',
      range: '+2.0°C to +8.0°C',
      humidity: '48%',
      status: 'Optimal (WHO-GDP Compliant)',
      lastCalibrated: '14 Sept 2026',
      loggerId: 'LOG-PQS-9921-A',
      backupPower: 'Dual Inverter + Automatic Diesel GenSet',
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    freezer: {
      name: 'Ultra-Low Biomaterial Chamber',
      location: 'Plot 5147 Washama Rd, Cold Core',
      temp: '-82.4°C',
      range: '-40.0°C to -86.0°C',
      humidity: 'N/A (Sealed Cryo)',
      status: 'Stable (Continuous N2 Backup)',
      lastCalibrated: '02 Sept 2026',
      loggerId: 'LOG-ULT-4412-B',
      backupPower: 'Independent Cascade + CO2 Injection',
      statusColor: 'text-sky-600 bg-sky-50 border-sky-200'
    },
    reefer: {
      name: 'Active Reefer Transit Van #04 (Lusaka to Ndola)',
      location: 'Great North Road Corridor, Kabwe Transit',
      temp: '+4.2°C',
      range: '+2.0°C to +8.0°C',
      humidity: '52%',
      status: 'In-Transit Telemetry Live (4G GSM)',
      lastCalibrated: '19 Sept 2026',
      loggerId: 'GPS-REEFER-04-ZM',
      backupPower: 'Vehicle Engine + Standby 220V Electric Shore-Power',
      statusColor: 'text-teal-600 bg-teal-50 border-teal-200'
    }
  };

  const activeSensor = sensorData[selectedSensor];

  return (
    <section id="cold-chain" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information & WHO Compliance */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 tracking-wider uppercase">
              <span>Plot 5147 Washama Rd</span>
              <span aria-hidden="true">·</span>
              <span>WHO Good Distribution Practices (GDP)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
              Unbroken Pharmaceutical Cold-Chain Logistics Across Southern Africa
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Temperature-sensitive biologicals, vaccines, and compounding pharmaceuticals require uncompromising thermal security.
              Sky Adventura operates dedicated temperature-monitored facilities in Lusaka and a nationwide fleet of active refrigerated
              vehicles equipped with continuous GSM telemetry data loggers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <div className="text-teal-400 font-bold text-base mb-1">-86°C to -20°C</div>
                <div className="font-semibold text-white">Ultra-Low Freezer Zone</div>
                <div className="text-slate-400 mt-1">mRNA vaccines, biological reagents, and specialized diagnostic enzymes.</div>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <div className="text-teal-400 font-bold text-base mb-1">+2°C to +8°C</div>
                <div className="font-semibold text-white">Vaccine Cold Rooms</div>
                <div className="text-slate-400 mt-1">Insulin, maternal serums, antivenoms, and essential immunization cold storage.</div>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <div className="text-teal-400 font-bold text-base mb-1">+15°C to +25°C</div>
                <div className="font-semibold text-white">Controlled Ambient Store</div>
                <div className="text-slate-400 mt-1">Tablets, antibiotics, intravenous fluids, and surgical disposables.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Live Telemetry Console */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <h3 className="font-bold text-sm text-white uppercase tracking-wider">
                    Live Cold-Chain Telemetry Monitor
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">24/7 GSM Logger Sync</span>
              </div>

              {/* Sensor Switcher Tabs */}
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  onClick={() => setSelectedSensor('vault')}
                  className={`p-2.5 rounded-lg font-medium text-center transition-colors ${
                    selectedSensor === 'vault'
                      ? 'bg-teal-500 text-white shadow-xs'
                      : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Vaccine Vault (+4°C)
                </button>
                <button
                  onClick={() => setSelectedSensor('freezer')}
                  className={`p-2.5 rounded-lg font-medium text-center transition-colors ${
                    selectedSensor === 'freezer'
                      ? 'bg-teal-500 text-white shadow-xs'
                      : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Deep Freeze (-86°C)
                </button>
                <button
                  onClick={() => setSelectedSensor('reefer')}
                  className={`p-2.5 rounded-lg font-medium text-center transition-colors ${
                    selectedSensor === 'reefer'
                      ? 'bg-teal-500 text-white shadow-xs'
                      : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Transit Reefer #04
                </button>
              </div>

              {/* Sensor Active Readout Card */}
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-700 space-y-4 text-xs">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-slate-400">{activeSensor.location}</div>
                    <div className="text-base font-bold text-white mt-0.5">{activeSensor.name}</div>
                  </div>
                  <div className={`px-2.5 py-1 rounded-md border font-semibold ${activeSensor.statusColor}`}>
                    {activeSensor.status}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                    <div className="text-slate-400 text-[11px]">Current Temp</div>
                    <div className="text-xl font-black text-teal-400 tabular-nums mt-0.5">
                      {activeSensor.temp}
                    </div>
                  </div>

                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                    <div className="text-slate-400 text-[11px]">Target Window</div>
                    <div className="text-xs font-semibold text-white mt-1">
                      {activeSensor.range}
                    </div>
                  </div>

                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                    <div className="text-slate-400 text-[11px]">Humidity</div>
                    <div className="text-xs font-semibold text-white mt-1">
                      {activeSensor.humidity}
                    </div>
                  </div>

                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                    <div className="text-slate-400 text-[11px]">Hardware Logger</div>
                    <div className="text-xs font-mono text-slate-300 mt-1 truncate">
                      {activeSensor.loggerId}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span>ZAMRA Verified Calibrated Probe (Last Cert: {activeSensor.lastCalibrated})</span>
                  </div>
                  <span className="text-slate-500">·</span>
                  <span>Generator Interlock Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
