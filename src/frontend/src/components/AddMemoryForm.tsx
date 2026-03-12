import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Plus } from "lucide-react";
import { useState } from "react";

interface AddMemoryFormProps {
  onAdd: (title: string, message: string) => void;
  isAdding: boolean;
}

export function AddMemoryForm({ onAdd, isAdding }: AddMemoryFormProps) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && message.trim()) {
      onAdd(title.trim(), message.trim());
      setTitle("");
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-card rounded-2xl shadow-sm border border-border/50"
    >
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium">
          Memory Title
        </Label>
        <Input
          id="title"
          type="text"
          placeholder="e.g., That amazing road trip..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isAdding}
          className="h-11"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Memory Details
        </Label>
        <Textarea
          id="message"
          placeholder="Share the details of this special memory..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isAdding}
          rows={4}
          className="resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={!title.trim() || !message.trim() || isAdding}
        className="w-full h-11 font-medium"
      >
        {isAdding ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Adding Memory...
          </>
        ) : (
          <>
            <Plus className="mr-2 h-4 w-4" />
            Add Memory
          </>
        )}
      </Button>
    </form>
  );
}
