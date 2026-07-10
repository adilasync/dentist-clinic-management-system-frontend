import { ImageIcon, Download, Eye } from "lucide-react";
import { xrays } from "../data/data";

export function XraysGrid() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-base font-semibold text-slate-900">Patient X-Rays</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {xrays.map((x, i) => (
          <div key={i} className="rounded-lg border border-slate-200 p-4">
            <div className="flex h-28 items-center justify-center rounded-lg bg-slate-100">
              <ImageIcon className="h-8 w-8 text-slate-300" />
            </div>
            <p className="mt-3 text-sm font-medium text-slate-900">{x.type}</p>
            <p className="text-xs text-slate-500">Tooth: {x.tooth}</p>
            <p className="text-xs text-slate-400">{x.date}</p>
            <div className="mt-3 flex gap-2">
              <button className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-slate-200 py-1.5 text-xs text-slate-700 hover:bg-slate-50">
                <Eye className="h-3 w-3" /> View
              </button>
              <button className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-slate-200 py-1.5 text-xs text-slate-700 hover:bg-slate-50">
                <Download className="h-3 w-3" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}