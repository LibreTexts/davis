import clsx from "clsx";
import { stepper as stepperVariants } from "@libretexts/davis-core";

export type StepperOrientation = "horizontal" | "vertical";
export type StepperSize = "sm" | "md" | "lg";

export type StepItem = {
  label: string;
  description?: string;
};

export type StepperProps = {
  steps: StepItem[];
  currentStep: number; // 0-based index
  orientation?: StepperOrientation;
  size?: StepperSize;
  className?: string;
};

export function Stepper({ steps, currentStep, orientation = "horizontal", size = "md", className }: StepperProps) {
  const { root } = stepperVariants({ orientation, size });
  return (
    <nav aria-label="Progress" className={clsx(root(), className)}>
      <ol className={root()}>
        {steps.map((step, index) => {
          const status = index < currentStep ? "complete" : index === currentStep ? "current" : "upcoming";
          const isLast = index === steps.length - 1;
          return (
            <StepItemComponent
              key={index}
              step={step}
              index={index}
              status={status}
              isLast={isLast}
              orientation={orientation}
              size={size}
            />
          );
        })}
      </ol>
    </nav>
  );
}

Stepper.displayName = "Stepper";

type StepItemComponentProps = {
  step: StepItem;
  index: number;
  status: "complete" | "current" | "upcoming";
  isLast: boolean;
  orientation: StepperOrientation;
  size: StepperSize;
};

function StepItemComponent({ step, index, status, isLast, orientation, size }: StepItemComponentProps) {
  const {
    step: stepClass,
    stepContent,
    connector,
    circle,
    label: labelClass,
    description: descClass,
  } = stepperVariants({ orientation, size, status });

  return (
    <>
      <li className={clsx(stepClass())} aria-current={status === "current" ? "step" : undefined}>
        {/* Horizontal connector — absolute-positioned, rendered inside each non-last step */}
        {!isLast && orientation === "horizontal" && (
          <div aria-hidden="true" className={connector()} />
        )}
        <div className={circle()}>
          {status === "complete" ? (
            <CheckIcon />
          ) : (
            <span>{index + 1}</span>
          )}
        </div>
        <div className={stepContent()}>
          <span className={labelClass()}>{step.label}</span>
          {step.description && (
            <span className={descClass()}>{step.description}</span>
          )}
        </div>
      </li>
      {/* Vertical connector — a separate list item between steps */}
      {!isLast && orientation === "vertical" && (
        <li aria-hidden="true" className={connector()} />
      )}
    </>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
    </svg>
  );
}
