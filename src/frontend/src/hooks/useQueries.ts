import { useMutation } from "@tanstack/react-query";
import type { Inquiry } from "../backend";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      description: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitInquiry(data.name, data.phone, data.description);
    },
  });
}

// Legacy stub for old components
export function useMemories() {
  const { actor } = useActor();
  return {
    memories: [] as Array<[bigint, Inquiry]>,
    isLoading: false,
    isError: false,
    addMemory: (_data: { title: string; message: string }) => {},
    isAddingMemory: false,
    deleteMemory: (_id: bigint) => {},
    isDeletingMemory: false,
    actor,
  };
}
