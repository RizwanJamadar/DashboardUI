import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ChevronDown } from "lucide-react";
import { sidebarLinks } from "@/utils";
import { Link } from "react-router-dom";

export function AppSidebar() {
  return (
    <Sidebar className="bg-white px-4 py-2 border-r border-gray-200">
      <SidebarHeader className="text-3xl text-center mb-4">
        <Link to="/">
          <span className="text-neutral-950 font-extrabold">abun.</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarLinks.map((item, index) => {
                const hasChildren = item.children && item.children.length > 0;

                if (hasChildren) {
                  return (
                    <Collapsible
                      key={index}
                      className="group/collapsible"
                      defaultOpen
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger defaultOpen asChild>
                          <SidebarMenuButton className="w-full justify-between cursor-pointer text">
                            <Link to={item.link} className="flex items-center font-medium">
                              {item.icon && (
                                <item.icon className="mr-2 h-4 w-4 text-[#535bf2]" />
                              )}
                              <span className="text-gray-700 hover:text-[#535bf2]">{item.label}</span>
                            </Link>
                            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.children.map((child, idx) => (
                              <SidebarMenuSubItem
                                key={idx}
                                className={`pl-2 text-sm ${
                                  child.active
                                    ? "text-blue-600 font-medium"
                                    : "text-muted-foreground"
                                } cursor-pointer hover:text-[#535bf2]`}
                              >
                                {child.label}
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                // Render normal menu item if no children
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.link || "#"}
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        {item.icon && <item.icon className="h-4 w-4 text-[#646cff]" />}
                        <span className="text-gray-700 hover:text-[#535bf2]">{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
