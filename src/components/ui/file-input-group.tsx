import * as React from "react";
import { Paperclip } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

function FileInputGroup({
  className,
  placeholder = "Choose File",
  onChange,
}: {
  placeholder?: string;
  onChange?: (file: File | null) => void;
  className?: string;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = React.useState<string>("");

  return (
    <>
      {/* Hidden native input */}
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          setFileName(file?.name || "");
          onChange?.(file);
        }}
      />

      {/* Custom UI */}
      <InputGroup
        className={cn("cursor-pointer", className)}
        onClick={() => inputRef.current?.click()}
      >
        <InputGroupAddon>
          <Paperclip  />
        </InputGroupAddon>

        <InputGroupText className="ml-2">
          {fileName || placeholder}
        </InputGroupText>
      </InputGroup>
    </>
  );
}

export default FileInputGroup;
