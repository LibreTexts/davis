import clsx from "clsx";
import { type ReactNode } from "react";
import { formSection as formSectionVariants } from "@libretexts/davis-core";

export type FormSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function FormSection({ title, description, children, className }: FormSectionProps) {
  const { root, legend, description: descClass, content } = formSectionVariants();
  return (
    <fieldset className={clsx(root(), className)}>
      <legend className={clsx(legend(), "!px-0")}>{title}</legend>
      {description && <p className={descClass()}>{description}</p>}
      <div className={clsx(content(), "clear-both")}>{children}</div>
    </fieldset>
  );
}

FormSection.displayName = "FormSection";
