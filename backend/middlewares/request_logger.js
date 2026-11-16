import morgan from "morgan"
import { ENV_TYPE } from "../config/env_vars.js"

const reqLogger = morgan("combined")

export default reqLogger
