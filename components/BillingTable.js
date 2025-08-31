"use client";

import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

/**
 * Props:
 * - invoices: [{ id, month, amount, status }]
 * - onPay: (id) => void
 * - onExport?: (invoice) => void  // optional custom export
 */
export default function BillingTable({ invoices = [], onPay, onExport }) {
  const defaultExport = async (invoice) => {
    try {
      // Lazy-load jsPDF only if present in your project
      const { default: jsPDF } = await import("jspdf");
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text("Invoice", 20, 20);
      doc.setFontSize(12);
      doc.text(`Month: ${invoice.month}`, 20, 40);
      doc.text(`Amount: ${invoice.amount}`, 20, 50);
      doc.text(`Status: ${invoice.status}`, 20, 60);
      doc.save(`invoice-${invoice.month}.pdf`);
    } catch (e) {
      // fallback: simple HTML download if jsPDF not installed
      const html =
        `<html><head><title>Invoice ${invoice.month}</title></head><body>` +
        `<h1>Invoice</h1><p><b>Month:</b> ${invoice.month}</p>` +
        `<p><b>Amount:</b> ${invoice.amount}</p>` +
        `<p><b>Status:</b> ${invoice.status}</p>` +
        `</body></html>`;
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `invoice-${invoice.month}.html`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Month</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell>{inv.month}</TableCell>
            <TableCell>{inv.amount}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                  inv.status === "Paid" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                }`}
              >
                {inv.status}
              </span>
            </TableCell>
            <TableCell className="flex justify-end gap-2">
              {inv.status === "Unpaid" && (
                <Button onClick={() => onPay?.(inv.id)}>Proceed to Payment</Button>
              )}
              <Button variant="outline" onClick={() => (onExport ? onExport(inv) : defaultExport(inv))}>
                Export PDF
              </Button>
            </TableCell>
          </TableRow>
        ))}
        {invoices.length === 0 && (
          <TableRow>
            <TableCell colSpan={4} className="text-center text-sm text-gray-500">
              No invoices found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}