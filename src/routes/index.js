import marketingRoutes from "./marketingRoutes.js";
import contasRoutes from "./contasRoutes.js";
import cryptoRoutes from "./cryptoRoutes.js";
import organizacoesRoutes from "./organizacoesRoutes.js";

function Routes(app) {
  marketingRoutes(app);
  contasRoutes(app);
  cryptoRoutes(app);
  organizacoesRoutes(app);
}

export default Routes;