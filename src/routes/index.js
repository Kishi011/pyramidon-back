import marketingRoutes from "./marketingRoutes.js";
import contasRoutes from "./contasRoutes.js";
import cryptoRoutes from "./cryptoRoutes.js";
import organizacoesRoutes from "./organizacoesRoutes.js";
import colaboradoresRoutes from "./colaboradoresRoutes.js";
import funcionariosRoutes from "./funcionariosRoutes.js";

function Routes(app) {
  marketingRoutes(app);
  contasRoutes(app);
  cryptoRoutes(app);
  organizacoesRoutes(app);
  colaboradoresRoutes(app);
  funcionariosRoutes(app);
}

export default Routes;