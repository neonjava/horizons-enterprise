
import React from 'react';

const ProcessorComparisonTable = () => {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-muted/50 border-b border-border">
            <th className="p-4 font-semibold text-foreground">Feature</th>
            <th className="p-4 font-semibold text-foreground">AMD EPYC™</th>
            <th className="p-4 font-semibold text-foreground">Intel® Xeon®</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          <tr>
            <td className="p-4 text-muted-foreground font-medium">Cores/Threads</td>
            <td className="p-4 text-foreground">Up to 128 / 256</td>
            <td className="p-4 text-foreground">Up to 60 / 120</td>
          </tr>
          <tr>
            <td className="p-4 text-muted-foreground font-medium">Base Clock</td>
            <td className="p-4 text-foreground">2.45 GHz</td>
            <td className="p-4 text-foreground">2.00 GHz</td>
          </tr>
          <tr>
            <td className="p-4 text-muted-foreground font-medium">L3 Cache</td>
            <td className="p-4 text-foreground">Up to 384MB</td>
            <td className="p-4 text-foreground">Up to 112.5MB</td>
          </tr>
          <tr>
            <td className="p-4 text-muted-foreground font-medium">PCIe Lanes</td>
            <td className="p-4 text-foreground">128 PCIe 4.0</td>
            <td className="p-4 text-foreground">80 PCIe 5.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProcessorComparisonTable;
