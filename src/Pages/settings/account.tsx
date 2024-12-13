import { AccountSettingsForm } from "@/components/settings/AccountSettingsForm";
import CustomSidebar from "@/components/sidebar/CustomSidebar";
import { Badge } from "@/components/ui/badge";

export default function AccountSettingsPage() {
  return (
    <div className="container mx-auto p-6 flex h-screen">
      <CustomSidebar />
      <div className="flex-1 p-6">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-2xl font-bold">Ajustes de cuenta</h1>
          <Badge variant="secondary" className="h-fit text-white bg-black hover:bg-black">
            Plan gratuito
          </Badge>
        </div>
        <AccountSettingsForm />
      </div>
    </div>
  );
}
