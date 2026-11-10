import morgan from "morgan"
import { ENV_TYPE } from "../config/env_vars.js"

const reqLogger = (ENV_TYPE === "prod") ? morgan("combined") : morgan("dev")

export default reqLogger
