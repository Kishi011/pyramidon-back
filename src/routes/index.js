import marketingRoutes from "./marketingRoutes.js";
import contasRoutes from "./contasRoutes.js";

function Routes(app) {
  marketingRoutes(app);
  contasRoutes(app)
}

export default Routes;