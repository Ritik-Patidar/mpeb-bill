"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react"
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [ivrs, setIvrs] = useState("");
  const [isValidIvrs, setIsValidIvrs] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsValidIvrs(true)
    setIvrs(value);
  };

  const handleFetchBill = () => {
    if (isLoading) return;
    const ivrsPattern = /^N\d{10}$/;
    const isValid = ivrsPattern.test(ivrs);
    
    if (!isValid) {
      setIsValidIvrs(false);
      return;
    }

    setIsLoading(true);
    router.push(`/bill/${ivrs}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid w-full max-w-sm items-center gap-3 mx-8">
        <Label htmlFor="ivrs">IVRS</Label>
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input
            id="ivrs"
            type="text"
            placeholder="N1234567890"
            onChange={handleChange}
            value={ivrs}
          />
          <Button
            disabled={!isValidIvrs}
            type="button"
            variant="outline"
            onClick={handleFetchBill}
          >
            {isLoading ? (
              <>
                <Loader2Icon className="animate-spin" />
                Please wait
              </>
            ) : (
              "View Bill"
            )}
          </Button>
        </div>

        <p className="text-muted-foreground text-sm text-red-700">
          {!isValidIvrs && "Enter a valid ivrs number"} &nbsp;
        </p>
      </div>
    </div>
  );
}
