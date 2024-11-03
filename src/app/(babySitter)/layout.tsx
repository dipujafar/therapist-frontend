import Container from "@/components/shared/Container";
import UserNavbar from "@/components/shared/UserNavbar";
import React, { ReactNode } from "react";

const BabySitterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <nav>
        <UserNavbar></UserNavbar>
      </nav>
      {children}
    </Container>
  );
};

export default BabySitterLayout;
