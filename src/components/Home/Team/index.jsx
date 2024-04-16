import { CardDescription, CardHeader, CardTitle, Card } from "@/components/ui/card";
import Container from "@/components/ui/container";
import React from "react";

const Team = () => {
  return (
    <div className="px-10 sm:px-12 md:px-16 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
      <Container>
        <h1 className="uppercase text-fontHeading font-bold text-[32px] w-fit">
          Team and Alumni
        </h1>
        <Card>
            <CardHeader>
                <CardTitle>

                </CardTitle>
                <CardDescription>

                </CardDescription>
            </CardHeader>
        </Card>
      </Container>
    </div>
  );
};

export default Team;
