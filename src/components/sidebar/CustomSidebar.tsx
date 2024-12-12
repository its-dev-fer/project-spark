import React from "react";
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react"; 
import { Plus } from 'lucide-react';


const CustomSidebar = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-[#ffffff]">
        <Sidebar side="left">
          <SidebarTrigger className="absolute top-4 -right-7" />
          <SidebarHeader className="hover:bg-gray-200 transition-colors">
            <div className="relative flex items-center gap-2">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center"> img</div>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex flex-col text-left">
                    <div className="flex items-center">
                      <h1 className="text-lg font-bold mr-1">Nombre del evento</h1>
                      <ChevronDown className="w-4 h-4 text-muted-foreground" style={{ marginLeft: "auto" }} /> 
                    </div>
                    <p className="text-sm text-muted-foreground">Tipo de evento</p>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-3 translate-x-60 -translate-y-12 h-60 flex flex-col justify-between"> 
                  <h2 className="text-sm font-medium mb-2">Mis eventos</h2>
                  <div className="space-y-2">
                    <button className="block w-full text-left text-sm px-3 py-2 hover:bg-muted rounded">
                      Nombre del evento
                    </button>
                  </div>
                  <div className="flex-grow"></div> 
                  <button className="flex items-center w-full text-left text-sm px-3 py-2 hover:bg-muted rounded">
                  <Plus className="w-4 h-4 mr-2 text-black" /> Nuevo evento
                  </button>
                </PopoverContent>
              </Popover>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <a href="#" className="block py-2 px-4 text-muted-foreground hover:bg-muted">
                Invitados
              </a>
              <a href="#" className="block py-2 px-4 text-muted-foreground hover:bg-muted">
                Hoteles
              </a>
              <a href="#" className="block py-2 px-4 text-muted-foreground hover:bg-muted">
                Detalles del evento
              </a>
              <a href="#" className="block py-2 px-4 text-muted-foreground hover:bg-muted">
                Contacto
              </a>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="hover:bg-gray-200 transition-colors">
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex flex-col text-left w-full px-4 py-2">
                  <div className="flex items-center">
                    <p className="text-sm font-medium mr-auto">Nombre Usuario</p>
                    <ChevronDown className="w-4 h-4 text-muted-foreground ml-auto" />
                  </div>
                  <p className="text-xs text-muted-foreground">Tipo de plan</p>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-60 p-3 translate-x-64 translate-y-10 h-auto flex flex-col justify-between">
                <h2 className="text-sm font-medium mb-2">Configuración</h2>
                <div className="space-y-2">
                  <button className="block w-full text-left text-sm px-3 py-2 hover:bg-muted rounded">
                    Actualizar a premium
                  </button>
                  <button className="block w-full text-left text-sm px-3 py-2 hover:bg-muted rounded">
                    Ajustes de cuenta
                  </button>
                </div>
                <div className="flex-grow"></div> 
                <button className="block w-full text-left text-sm px-3 py-2 hover:bg-muted rounded">
                  Cerrar sesión
                </button>
              </PopoverContent>
            </Popover>
          </SidebarFooter>
        </Sidebar>


        <main className="flex-1 p-4"></main>
      </div>
    </SidebarProvider>
  );
};

export default CustomSidebar;
