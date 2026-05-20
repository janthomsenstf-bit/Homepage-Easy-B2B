import styles from './ProcessSteps.module.css'

interface Step {
  nr: number
  icon: string
  title: string
  desc: string
}

interface ProcessStepsProps {
  steps: Step[]
  title?: string
  variant?: 'horizontal' | 'vertical'
}

export default function ProcessSteps({
  steps,
  title,
  variant = 'horizontal',
}: ProcessStepsProps) {
  return (
    <div className={styles.container}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={`${styles.steps} ${styles[variant]}`}>
        {steps.map((step, idx) => (
          <div key={step.nr} className={styles.step}>
            <div className={styles.stepIcon}>{step.icon}</div>
            <div className={styles.stepContent}>
              <div className={styles.stepNumber}>Schritt {step.nr}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDesc}>{step.desc}</div>
            </div>
            {idx < steps.length - 1 && (
              <div className={`${styles.connector} ${styles[variant]}`}>→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
