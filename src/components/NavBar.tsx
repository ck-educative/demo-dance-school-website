import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import { Content } from "@/components/Common";

export default function NavBarC() {
  return (
    <div className="p-2">
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link href="/">
          <AcmeLogo />
          </Link>
        </NavbarItem>
      <NavbarItem>
          <Link href="/">
          <Content text="AVISMIRTI"/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">
          <Content text="About Us"/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/classes">
          <Content text="Class Schedule"/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/events">
          <Content text="Upcoming Events"/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">
          <Content text="Contact Us"/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/testimonials">
          <Content text="Testimonials"/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
          <Content text="Register Interest"/>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  );
}
