"use client";

import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-xl font-bold">Welcome</h1>
            <FieldDescription>
              Don&apos;t have an account? <a href="#">Sign up</a>
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" type="password" required />
          </Field>
          <Field>
            <Button type="submit" variant="outline">
              Login
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        Contact <a href="#">support</a>, if you have any issues.
      </FieldDescription>
    </div>
  );
}
