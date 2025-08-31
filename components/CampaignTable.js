"use client";

import { useEffect, useState } from "react";
import CampaignForm from "@/components/CampaignForm";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

/**
 * Props:
 * - campaigns: array (required)
 * - onUpdate: optional (receives updated array after edit/delete)
 */
export default function CampaignTable({ campaigns = [], onUpdate }) {
  const [rows, setRows] = useState(campaigns);
  const [editRow, setEditRow] = useState(null);

  useEffect(() => setRows(campaigns), [campaigns]);

  const applyUpdate = (next) => {
    setRows(next);
    onUpdate?.(next);
  };

  const handleEditSave = (updated) => {
    applyUpdate(rows.map((r) => (r.id === updated.id ? updated : r)));
    setEditRow(null);
  };

  const handleDelete = (id) => {
    applyUpdate(rows.filter((r) => r.id !== id));
  };

  return (
    <div className="mt-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((c) => (
            <TableRow key={c.id}>
              <TableCell>{c.name}</TableCell>
              <TableCell>${Number(c.budget).toLocaleString()}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    c.status === "Active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {c.status}
                </span>
              </TableCell>
              <TableCell className="flex justify-end gap-2">
                <CampaignForm
                  triggerLabel="Edit"
                  initialData={c}
                  onAdd={handleEditSave}
                />
                <Button variant="destructive" onClick={() => handleDelete(c.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {rows.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-sm text-gray-500">
                No campaigns yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}