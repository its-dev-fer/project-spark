import CustomSidebar from "@/components/sidebar/CustomSidebar";
import { Card,CardHeader,CardTitle,CardDescription,CardContent,CardFooter} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    id: "gratis",
    title: "Gratis",
    description: "Perfecto para comenzar a crear tus invitaciones digitales.",
    benefits: [
      "Acceso hasta 2 eventos",
      "Acceso a plantillas básicas",
      "Envío de hasta 10 invitaciones por evento",
      "Confirmación de asistencia",
    ],
    price: "Gratis",
    buttonText: "Cambiar al plan gratuito",
  },
  {
    id: "premium",
    title: "Premium",
    description: "Un nivel superior para eventos con más estilo y personalización.",
    benefits: [
      "Eventos ilimitados",
      "Acceso a plantillas Premium",
      "Envío de hasta 100 invitaciones por evento",
      "Integración con búsqueda de hoteles y links de reservación",
      "Carga masiva de invitados",
    ],
    price: "$149 MXN/mes",
    buttonText: "Suscribirse por $149 MXN al MES",
  },
  {
    id: "elite",
    title: "Elite",
    description: "La opción definitiva con acceso total y características exclusivas.",
    benefits: [
      "Eventos ilimitados",
      "Acceso a todas las plantillas",
      "Envío de invitaciones ilimitadas por evento",
      "Recordatorios para tus invitados",
      "Integración con búsqueda de hoteles y links de reservación",
      "Carga masiva de invitados",
    ],
    price: "$299 MXN/mes",
    buttonText: "Suscribirse por $299 MXN al MES",
  },
];

const currentPlan: "gratis" | "premium" | "elite" = "gratis"; 

export default function PlansView() {
  return (
    <div className="flex h-screen bg-gray-50">
      <CustomSidebar />

      <main className="flex-1 p-8" style={{ marginRight: "6rem" }}>
        <h1 className="text-3xl font-bold mb-6">
          Actualiza a {currentPlan === "elite" ? "Elite" : "Premium"}
        </h1>
        <div className="flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center gap-8 overflow-x-auto">
  {plans.map((plan) => (
    <Card
      key={plan.id}
      className={`w-full sm:w-80 shadow-lg flex flex-col justify-between ${
        currentPlan === plan.id ? "bg-[#0F172A] text-white" : "bg-white text-black"
      }`}
    >
      <CardHeader>
        <CardTitle
          className={`${
            currentPlan === plan.id ? "text-white text-3xl" : "text-black text-2xl"
          }`}
        >
          {plan.title}
        </CardTitle>
        <CardDescription
          className={`mt-2 ${
            currentPlan === plan.id ? "text-white" : "text-gray-600"
          }`}
        >
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p
          className={`font-semibold mb-2 ${
            currentPlan === plan.id ? "text-white" : "text-black"
          }`}
        >
          Beneficios:
        </p>
        <ul
          className={`list-disc list-inside ${
            currentPlan === plan.id ? "text-white" : "text-gray-800"
          }`}
        >
          {plan.benefits.map((benefit, index) => (
            <li key={index} className="mb-1">
              <span className="font-bold">{benefit.split(" ")[0]}</span>{" "}
              {benefit.split(" ").slice(1).join(" ")}
            </li>
          ))}
        </ul>
        {currentPlan !== plan.id && (
          <div className="mt-4">
            <p className="font-semibold mb-2">Elige tu plan:</p>
            <div className="flex gap-2">
              <Button variant="outline" className="w-1/2">
                Mensual
              </Button>
              <Button variant="outline" className="w-1/2">
                Anual
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto">
        {currentPlan !== plan.id && (
          <Button
            variant="default"
            className="w-full text-sm"
            style={{
              backgroundColor: "#0F172A",
              color: "white",
            }}
          >
            {plan.buttonText}
          </Button>
        )}
      </CardFooter>
    </Card>
  ))}
</div>
      </main>
    </div>
  );
}

