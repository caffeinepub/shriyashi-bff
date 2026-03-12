import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Trash2 } from "lucide-react";
import type { Inquiry } from "../backend";

interface MemoriesListProps {
  memories: Array<[bigint, Inquiry]>;
  onDelete: (id: bigint) => void;
  isDeleting: boolean;
}

export function MemoriesList({
  memories,
  onDelete,
  isDeleting,
}: MemoriesListProps) {
  if (memories.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
          <Heart className="h-8 w-8 text-muted-foreground" />
        </div>
        <h4 className="text-xl font-semibold mb-2">No memories yet</h4>
        <p className="text-muted-foreground">
          Start adding your favorite moments together to build your love story!
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {memories.map(([id, inquiry]) => (
        <Card
          key={id.toString()}
          className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-1 border-border/50"
        >
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-lg font-semibold leading-tight flex-1">
                {inquiry.name}
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(id)}
                disabled={isDeleting}
                className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {inquiry.caseDescription}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
