import Container from "@/components/shared/Container";
import FamilyUserNavbar from "@/components/shared/FamilyUserNavbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <nav>
        <FamilyUserNavbar></FamilyUserNavbar>
      </nav>
      {children}
    </Container>
  );
};

export default layout;
