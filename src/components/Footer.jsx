import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="font-normal text-centergap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bg-[#181818]">
      <Typography color="white">&copy; 2023 Material Tailwind</Typography>
    </footer>
  );
}
