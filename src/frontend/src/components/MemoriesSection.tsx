import { Heart } from "lucide-react";
import { useMemories } from "../hooks/useQueries";
import { AddMemoryForm } from "./AddMemoryForm";
import { MemoriesList } from "./MemoriesList";

export function MemoriesSection() {
  const {
    memories,
    isLoading,
    isError,
    addMemory,
    isAddingMemory,
    deleteMemory,
    isDeletingMemory,
  } = useMemories();

  const handleAddMemory = (title: string, message: string) => {
    addMemory({ title, message });
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Heart className="h-8 w-8 text-primary fill-primary" />
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-primary">Love Story</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of all the precious moments we've shared together
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <AddMemoryForm onAdd={handleAddMemory} isAdding={isAddingMemory} />
        </div>

        {isLoading ? (
          <div className="text-center py-16">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent" />
            <p className="mt-4 text-muted-foreground">Loading memories...</p>
          </div>
        ) : isError ? (
          <div className="text-center py-16 px-4">
            <p className="text-destructive">
              Failed to load memories. Please try again.
            </p>
          </div>
        ) : (
          <MemoriesList
            memories={memories}
            onDelete={deleteMemory}
            isDeleting={isDeletingMemory}
          />
        )}
      </div>
    </section>
  );
}
