"use client";

import clsx from "clsx";
import { type ReactNode } from "react";
import {
  table as tableVariants,
  tableHead as tableHeadVariants,
  tableRow as tableRowVariants,
  tableCell as tableCellVariants,
  tableHeaderCell as tableHeaderCellVariants,
} from "@libretexts/davis-core";

export type TableAlign = "left" | "center" | "right";

export type TableProps = {
  children: ReactNode;
  caption?: string;
  className?: string;
};

export type TableHeadProps = {
  children: ReactNode;
  className?: string;
};

export type TableBodyProps = {
  children: ReactNode;
  className?: string;
};

export type TableRowProps = {
  children: ReactNode;
  className?: string;
};

export type TableCellProps = {
  children: ReactNode;
  align?: TableAlign;
  colSpan?: number;
  className?: string;
};

export type TableHeaderCellProps = {
  children: ReactNode;
  align?: TableAlign;
  scope?: string;
  className?: string;
};

export type TableCaptionProps = {
  children: ReactNode;
  className?: string;
};

const ALIGN_CLASSES: Record<TableAlign, string> = {
  left:   "text-left",
  center: "text-center",
  right:  "text-right",
};

function TableRoot({ children, caption, className }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className={clsx(tableVariants(), className)}>
        {caption && <TableCaption>{caption}</TableCaption>}
        {children}
      </table>
    </div>
  );
}

TableRoot.displayName = "Table";

function TableCaption({ children, className }: TableCaptionProps) {
  return (
    <caption className={clsx("px-4 py-2 text-sm text-gray-500 text-left", className)}>
      {children}
    </caption>
  );
}

TableCaption.displayName = "Table.Caption";

function TableHead({ children, className }: TableHeadProps) {
  return (
    <thead className={clsx(tableHeadVariants(), className)}>
      {children}
    </thead>
  );
}

TableHead.displayName = "Table.Head";

function TableBody({ children, className }: TableBodyProps) {
  return <tbody className={clsx(className)}>{children}</tbody>;
}

TableBody.displayName = "Table.Body";

function TableRow({ children, className }: TableRowProps) {
  return (
    <tr className={clsx(tableRowVariants(), className)}>
      {children}
    </tr>
  );
}

TableRow.displayName = "Table.Row";

function TableCell({ children, align = "left", colSpan, className }: TableCellProps) {
  return (
    <td colSpan={colSpan} className={clsx(tableCellVariants(), ALIGN_CLASSES[align], className)}>
      {children}
    </td>
  );
}

TableCell.displayName = "Table.Cell";

function TableHeaderCell({
  children,
  align = "left",
  scope = "col",
  className,
}: TableHeaderCellProps) {
  return (
    <th
      scope={scope}
      className={clsx(tableHeaderCellVariants(), ALIGN_CLASSES[align], className)}
    >
      {children}
    </th>
  );
}

TableHeaderCell.displayName = "Table.HeaderCell";

TableRoot.Caption = TableCaption;
TableRoot.Head = TableHead;
TableRoot.Body = TableBody;
TableRoot.Row = TableRow;
TableRoot.Cell = TableCell;
TableRoot.HeaderCell = TableHeaderCell;

export { TableRoot as Table };
