'use client';

import { Button } from "ui-kit";

export default function UIDemoPage() {
  return (
    <main className="min-h-screen p-8 space-y-6">
      <h1 className="text-2xl font-semibold">UI Kit Demo</h1>
      <div className="flex gap-3">
        <Button onClick={() => alert("Primary clicked")}>Primary</Button>
        <Button variant="secondary" onClick={() => alert("Secondary clicked")}>Secondary</Button>
      </div>
      <p className="text-sm text-gray-500">Imported from the local workspace package `ui-kit`.</p>
    </main>
  );
}
