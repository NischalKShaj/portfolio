import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  ArrowRight,
  Boxes,
  Braces,
  Check,
  CircleAlert,
  ClipboardCheck,
  Database,
  Globe,
  LockKeyhole,
  RotateCcw,
  Router,
  Server,
  Zap,
} from "lucide-react";

const stages = [
  { title: "HTTP Request", detail: "GET /projects", icon: Globe },
  { title: "API Router", detail: "Match Route", icon: Router },
  { title: "Authentication", detail: "Verify JWT", icon: LockKeyhole },
  { title: "Validation", detail: "Validate Request", icon: ClipboardCheck },
  { title: "Redis Cache Lookup", detail: "Cache Decision", icon: Zap },
];

const toneClasses = {
  purple:
    "border-[#9455ff]/25 bg-[#9455ff]/[0.07] text-[#c5a5ff] shadow-[#9455ff]/10",
  cyan: "border-[#36d9ff]/25 bg-[#36d9ff]/[0.06] text-[#7ce7ff] shadow-[#36d9ff]/10",
  green:
    "border-emerald-300/25 bg-emerald-300/[0.06] text-emerald-200 shadow-emerald-300/10",
  red: "border-rose-400/25 bg-rose-400/[0.06] text-rose-200 shadow-rose-400/10",
};

const FlowNode = ({
  title,
  detail,
  icon: Icon,
  tone = "purple",
  active = false,
  muted = false,
  selected = false,
  onClick,
}) => (
  <motion.button
    type="button"
    aria-pressed={selected}
    disabled={!onClick}
    onClick={onClick}
    animate={active ? { y: [0, -2, 0] } : { y: 0 }}
    transition={{ duration: 1.8, repeat: active ? Infinity : 0 }}
    className={`relative flex min-w-0 flex-1 flex-col items-center justify-center rounded-xl border px-1.5 py-2.5 text-center transition-all duration-300 disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c5a5ff] sm:px-2 ${
      muted
        ? "border-white/5 bg-[#111020]/40 opacity-40"
        : `${toneClasses[tone]} ${
            active
              ? "border-opacity-90 bg-opacity-15 shadow-lg"
              : "border-white/10 bg-[#111020]/90"
          } ${selected ? "ring-1 ring-rose-300/60" : ""}`
    }`}
  >
    <span className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg border border-current/20 bg-black/20 sm:h-8 sm:w-8">
      <Icon size={15} strokeWidth={1.8} aria-hidden="true" />
    </span>
    <span className="text-[9px] font-semibold leading-tight text-white sm:text-[10px]">
      {title}
    </span>
    <span className="mt-1 text-[8px] leading-tight text-secondary sm:text-[9px]">
      {detail}
    </span>
  </motion.button>
);

FlowNode.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  tone: PropTypes.string,
  active: PropTypes.bool,
  muted: PropTypes.bool,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

const FlowConnector = ({
  vertical = false,
  active = false,
  tone = "purple",
}) => {
  const color =
    tone === "green" ? "#6ee7b7" : tone === "red" ? "#fb7185" : "#36d9ff";
  const path = vertical ? "M10 1 V30" : "M1 10 H30";
  const arrow =
    tone === "red" ? "#fb7185" : tone === "green" ? "#6ee7b7" : "#9455ff";

  return (
    <>
      <svg
        aria-hidden="true"
        viewBox={vertical ? "0 0 20 34" : "0 0 34 20"}
        className={
          vertical
            ? "my-1 h-[34px] w-5 shrink-0 sm:hidden"
            : "hidden h-5 w-[34px] shrink-0 sm:block"
        }
      >
        <path
          d={path}
          fill="none"
          stroke={arrow}
          strokeWidth="1.25"
          strokeDasharray={active ? "3 3" : "none"}
          opacity={active ? 0.9 : 0.45}
        />
        <path
          d={vertical ? "M7 27 L10 31 L13 27" : "M27 7 L31 10 L27 13"}
          fill="none"
          stroke={arrow}
          strokeWidth="1.25"
          opacity={active ? 0.9 : 0.45}
        />
        {active && (
          <circle r="2" fill={color}>
            <animateMotion dur="1.35s" repeatCount="indefinite" path={path} />
          </circle>
        )}
      </svg>
      {vertical && (
        <svg
          aria-hidden="true"
          viewBox="0 0 34 20"
          className="hidden h-5 w-[34px] shrink-0 sm:block"
        >
          <path
            d="M1 10 H30 M27 7 L31 10 L27 13"
            fill="none"
            stroke={arrow}
            strokeWidth="1.25"
            opacity={active ? 0.9 : 0.45}
          />
          {active && (
            <circle r="2" fill={color}>
              <animateMotion
                dur="1.35s"
                repeatCount="indefinite"
                path="M1 10 H30"
              />
            </circle>
          )}
        </svg>
      )}
    </>
  );
};

FlowConnector.propTypes = {
  vertical: PropTypes.bool,
  active: PropTypes.bool,
  tone: PropTypes.string,
};

const BranchStep = ({ icon: Icon, title, detail, tone }) => (
  <div
    className={`flex min-w-0 flex-1 flex-col items-center justify-center rounded-lg border px-1 py-2 text-center ${
      tone === "green"
        ? "border-emerald-300/15 bg-emerald-300/[0.04]"
        : "border-[#36d9ff]/15 bg-[#36d9ff]/[0.035]"
    }`}
  >
    <Icon
      size={13}
      strokeWidth={1.8}
      aria-hidden="true"
      className={tone === "green" ? "text-emerald-200" : "text-[#7ce7ff]"}
    />
    <span className="mt-1 text-[8px] font-medium leading-tight text-white sm:text-[9px]">
      {title}
    </span>
    <span className="mt-0.5 text-[7px] leading-tight text-secondary sm:text-[8px]">
      {detail}
    </span>
  </div>
);

BranchStep.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  tone: PropTypes.string.isRequired,
};

const BranchPath = ({ cacheHit, selected, onSelect, active }) => {
  const tone = cacheHit ? "green" : "cyan";
  const title = cacheHit ? "CACHE HIT · FAST PATH" : "CACHE MISS · DATA PATH";
  const steps = cacheHit
    ? [
        { title: "Cache Hit", detail: "Cache key found", icon: Zap },
        {
          title: "Cached Data",
          detail: "Retrieve cached data",
          icon: Boxes,
        },
      ]
    : [
        {
          title: "Controller",
          detail: "Execute business logic",
          icon: Server,
        },
        { title: "PostgreSQL", detail: "Fetch data", icon: Database },
        {
          title: "Transform & Cache",
          detail: "Store in Redis",
          icon: RotateCcw,
        },
      ];

  return (
    <motion.button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      whileHover={{ y: -2 }}
      className={`min-w-0 rounded-xl border p-2.5 text-left transition-all sm:p-3 ${
        selected
          ? cacheHit
            ? "border-emerald-300/45 bg-emerald-300/[0.08] shadow-[0_0_22px_rgba(110,231,183,0.12)]"
            : "border-[#36d9ff]/45 bg-[#36d9ff]/[0.07] shadow-[0_0_22px_rgba(54,217,255,0.12)]"
          : cacheHit
            ? "border-emerald-300/20 bg-emerald-300/[0.035] hover:border-emerald-300/40"
            : "border-[#36d9ff]/20 bg-[#36d9ff]/[0.03] hover:border-[#36d9ff]/40"
      } ${active ? "ring-1 ring-white/10" : ""} ${
        !selected ? "opacity-50" : ""
      }`}
    >
      <span className="flex items-center justify-between gap-2">
        <span
          className={`text-[9px] font-semibold uppercase tracking-wide sm:text-[10px] ${
            cacheHit ? "text-emerald-200" : "text-[#7ce7ff]"
          }`}
        >
          {title}
        </span>
        {selected && (
          <Check
            size={12}
            aria-hidden="true"
            className={cacheHit ? "text-emerald-200" : "text-[#7ce7ff]"}
          />
        )}
      </span>
      <span className="mt-2 flex items-stretch gap-1">
        {steps.map(({ title: stepTitle, detail, icon }, index) => (
          <span
            key={stepTitle}
            className="flex min-w-0 flex-1 items-center gap-1"
          >
            <BranchStep
              icon={icon}
              title={stepTitle}
              detail={detail}
              tone={tone}
            />
            {index < steps.length - 1 && (
              <ArrowRight
                size={10}
                aria-hidden="true"
                className={`shrink-0 ${
                  cacheHit ? "text-emerald-200" : "text-[#7ce7ff]"
                }`}
              />
            )}
          </span>
        ))}
      </span>
    </motion.button>
  );
};

BranchPath.propTypes = {
  cacheHit: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

const errorPaths = {
  authentication: {
    step: -1,
    title: "Invalid Token → 401 Unauthorized",
  },
  validation: {
    step: -2,
    title: "Invalid Input → 400 Bad Request",
  },
};

const scenarioSteps = {
  authentication: [0, 1, 2, -1],
  validation: [0, 1, 2, 3, -2],
  "cache-hit": [0, 1, 2, 3, 4, 5, 6, 7],
  "cache-miss": [0, 1, 2, 3, 4, 8, 9, 10, 7],
};

const ApiLifecycleDiagram = () => {
  const [scenario, setScenario] = useState("cache-hit");
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const steps = scenarioSteps[scenario];
    let index = 0;
    setActiveStep(steps[index]);

    const timer = window.setInterval(() => {
      index = (index + 1) % steps.length;
      setActiveStep(steps[index]);
    }, 1100);
    return () => window.clearInterval(timer);
  }, [scenario]);

  const isErrorScenario =
    scenario === "authentication" || scenario === "validation";
  const errorPath =
    scenario === "authentication"
      ? errorPaths.authentication
      : scenario === "validation"
        ? errorPaths.validation
        : null;
  const branchActive = scenario === "cache-hit" || scenario === "cache-miss";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
      className="relative w-full max-w-[780px]"
    >
      <div className="absolute -inset-8 rounded-[40px] bg-[#9455ff]/10 blur-3xl" />
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#36d9ff]/60 via-[#9455ff]/50 to-[#9455ff]/10 opacity-70" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0b1c]/95 p-4 shadow-[0_24px_100px_rgba(70,35,150,0.3)] backdrop-blur-xl sm:p-6">
        <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#9455ff]/15 blur-3xl" />
        <header className="relative flex items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary sm:text-[11px]">
              API request lifecycle
            </p>
            <p className="mt-1 text-xs font-medium text-white sm:text-sm">
              One request. Multiple execution paths.
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-[#9455ff]/25 bg-[#9455ff]/10 px-2.5 py-1 text-[9px] text-[#c5a5ff] sm:text-[10px]">
            INTERACTIVE
          </span>
        </header>

        <div className="relative mt-5 flex flex-col items-stretch sm:flex-row sm:items-start">
          {stages.map(({ title, detail, icon }, index) => (
            <div
              key={title}
              className="relative flex min-w-0 flex-1 flex-col items-center sm:flex-row"
            >
              <FlowNode
                title={title}
                detail={detail}
                icon={icon}
                active={activeStep === index}
                selected={
                  (index === 2 && scenario === "authentication") ||
                  (index === 3 && scenario === "validation")
                }
                onClick={
                  index === 2
                    ? () => setScenario("authentication")
                    : index === 3
                      ? () => setScenario("validation")
                      : undefined
                }
                tone={index === 4 ? "cyan" : "purple"}
                muted={
                  (scenario === "authentication" && index > 2) ||
                  (scenario === "validation" && index > 3)
                }
              />
              {index < stages.length - 1 && (
                <FlowConnector
                  vertical
                  active={
                    activeStep === index &&
                    !(
                      (scenario === "authentication" && index >= 2) ||
                      (scenario === "validation" && index >= 3)
                    )
                  }
                  tone={index === 3 ? "cyan" : "purple"}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-2 grid w-full max-w-[420px] grid-cols-2 gap-2">
          {Object.entries(errorPaths).map(([key, { step, title }]) => (
            <motion.button
              key={key}
              type="button"
              aria-pressed={scenario === key}
              onClick={() => setScenario(key)}
              animate={
                activeStep === step ? { scale: [1, 1.025, 1] } : { scale: 1 }
              }
              transition={{ duration: 1.4, repeat: Infinity }}
              className={`relative min-w-0 rounded-lg border px-2 py-1.5 text-center text-[8px] font-medium transition-colors before:absolute before:bottom-full before:left-1/2 before:h-2 before:w-px before:bg-rose-300/40 before:content-[''] sm:text-[9px] ${
                scenario === key
                  ? "border-rose-300/45 bg-rose-300/10 text-rose-200"
                  : "border-rose-300/15 bg-rose-300/[0.025] text-rose-200/70 hover:border-rose-300/35"
              }`}
            >
              {title}
            </motion.button>
          ))}
        </div>

        <div
          className={`mt-4 flex items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] ${
            isErrorScenario ? "text-rose-200/70" : "text-secondary"
          }`}
        >
          <span className="h-px w-6 bg-[#9455ff]/40" />
          {isErrorScenario
            ? "Request stopped before cache lookup"
            : "Redis cache decision"}
          <span className="h-px w-6 bg-[#9455ff]/40" />
        </div>
        <div className="mx-auto flex h-7 w-full max-w-[560px] items-center justify-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 420 28"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M210 0 V10 H105 V26 M210 10 H315 V26"
              fill="none"
              stroke="#9455ff"
              strokeWidth="1.2"
              opacity={branchActive ? "0.65" : "0.16"}
            />
            <path
              d="M101 22 L105 27 L109 22 M311 22 L315 27 L319 22"
              fill="none"
              stroke="#9455ff"
              strokeWidth="1.2"
              opacity={branchActive ? "0.65" : "0.16"}
            />
            {branchActive && activeStep === 4 && (
              <motion.circle r="2.5" fill="#36d9ff">
                <animateMotion
                  dur="1.1s"
                  fill="freeze"
                  path={`M210 1 V10 H${scenario === "cache-hit" ? "105" : "315"} V26`}
                />
              </motion.circle>
            )}
          </svg>
        </div>

        <div className="mx-auto grid w-full max-w-[560px] gap-3 sm:grid-cols-2">
          <BranchPath
            cacheHit
            selected={scenario === "cache-hit"}
            onSelect={() => setScenario("cache-hit")}
            active={
              scenario === "cache-hit" && activeStep >= 5 && activeStep <= 6
            }
          />
          <BranchPath
            cacheHit={false}
            selected={scenario === "cache-miss"}
            onSelect={() => setScenario("cache-miss")}
            active={
              scenario === "cache-miss" && activeStep >= 8 && activeStep <= 10
            }
          />
        </div>

        <div className="mx-auto flex h-7 w-full max-w-[560px] items-center justify-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 420 28"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M105 0 V10 H210 V27 M315 0 V10 H210"
              fill="none"
              stroke="#36d9ff"
              strokeWidth="1.2"
              opacity={branchActive ? "0.65" : "0.16"}
            />
            <path
              d="M205 7 L210 10 L205 13 M215 7 L210 10 L215 13 M206 22 L210 27 L214 22"
              fill="none"
              stroke="#36d9ff"
              strokeWidth="1.2"
              opacity={branchActive ? "0.65" : "0.16"}
            />
            {branchActive &&
              ((scenario === "cache-hit" && activeStep === 6) ||
                (scenario === "cache-miss" && activeStep === 10)) && (
                <motion.circle r="2.5" fill="#a5f3fc">
                  <animateMotion
                    dur="1.1s"
                    fill="freeze"
                    path={`M${scenario === "cache-hit" ? "105" : "315"} 1 V10 H210 V27`}
                  />
                </motion.circle>
              )}
          </svg>
        </div>
        <motion.div
          animate={
            activeStep === 7 || (errorPath && activeStep === errorPath.step)
              ? {
                  boxShadow: isErrorScenario
                    ? [
                        "0 0 0 rgba(251,113,133,0.05)",
                        "0 0 20px rgba(251,113,133,0.16)",
                        "0 0 0 rgba(251,113,133,0.05)",
                      ]
                    : [
                        "0 0 0 rgba(54,217,255,0.05)",
                        "0 0 22px rgba(54,217,255,0.16)",
                        "0 0 0 rgba(54,217,255,0.05)",
                      ],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`mx-auto flex w-full max-w-[320px] flex-col items-center justify-center gap-1 rounded-xl border px-4 py-2.5 text-center ${
            isErrorScenario
              ? "border-rose-300/30 bg-rose-300/[0.06] text-rose-200"
              : "border-[#36d9ff]/30 bg-[#36d9ff]/[0.06] text-[#a5f3fc]"
          } ${activeStep !== 7 && !isErrorScenario ? "opacity-50" : ""}`}
        >
          {isErrorScenario ? (
            <>
              <span className="flex items-center gap-2 text-xs font-semibold">
                <CircleAlert size={15} aria-hidden="true" />
                {errorPath.title}
              </span>
              <span className="text-[9px] text-rose-200/75">
                Request rejected
              </span>
            </>
          ) : (
            <>
              <span className="flex items-center gap-2 text-xs font-semibold">
                <Braces size={15} aria-hidden="true" />
                HTTP Response · 2xx SUCCESS
              </span>
              <span className="text-[9px] text-[#a5f3fc]/75">
                JSON response · Example: 200 OK
              </span>
            </>
          )}
        </motion.div>
        <p className="mt-2 text-center text-[8px] text-secondary">
          Select the auth or cache branch to explore the request path
        </p>
      </div>
    </motion.div>
  );
};

export default ApiLifecycleDiagram;
