"use client";
import { motion } from "framer-motion";
import { FaGolang, FaJs, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiNestjs, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { ProfileImage } from "@/components/shared/ProfileImage";

export default function Resume() {
  const about = {
    title: "About Me",
    image: "/profileImage.png",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Jony",
      },
      {
        fieldName: "Phone",
        fieldValue: "(123) 456-7890",
      },
      {
        fieldName: "Email",
        fieldValue: "jony@example.com",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Bangladeshi",
      },
      {
        fieldName: "Languages",
        fieldValue: "English, Bangla",
      },
    ],
  };

  const education = {
    title: "Education",
    info: [
      {
        fieldName: "University",
        fieldValue: "North East University Bangladesh",
      },
      {
        fieldName: "College",
        fieldValue: "Border Guard Public School and College",
      },
      {
        fieldName: "School",
        fieldValue: "Border Guard Public School and College",
      },
    ],
  };

  const skills = {
    title: "Skills",
    info: [
      {
        icon: <FaJs />,
        label: "Javascript",
      },
      {
        icon: <FaReact />,
        label: "Reactjs",
      },
      {
        icon: <SiNextdotjs />,
        label: "Nextjs",
      },
      {
        icon: <FaGolang />,
        label: "Golang",
      },
      {
        icon: <FaNodeJs />,
        label: "Nodejs",
      },
      {
        icon: <SiNestjs />,
        label: "Nestjs",
      },
    ],
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col items-center xl:items-start xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col max-w-[300px] w-full gap-[60px] ">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <div className="lg:min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{skills.title}</h2>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.info.map((items, index) => {
                      return (
                        <li key={index} className=" ">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-black-200 rounded-xl flex justify-center items-center group gap-[30px]">
                                <div className="text-4xl transition-colors duration-500 group-hover:text-purple md:py-0">
                                  {items.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{items.label}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/** Education  */}
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{education.title}</h2>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.info.map((items, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-black-200 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-muted-foreground">
                            {items.fieldName}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {items.fieldValue}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/** About  */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center lg:place-items-stretch ">
                <div className="order-1 xl:order-none">
                  <ProfileImage image={about.image} />
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-4 text-center order-2 xl:order-none">
                  {about.info.map((items, index) => {
                    return (
                      <li key={index} className="flex items-center gap-[10px]">
                        <span className="text-muted-foreground">
                          {items.fieldName}
                        </span>
                        <span>{items.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
