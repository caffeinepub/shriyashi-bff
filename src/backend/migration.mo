import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  type OldMemory = {
    title : Text;
    message : Text;
  };

  type OldActor = {
    memories : Map.Map<Nat, OldMemory>;
    nextMemoryId : Nat;
  };

  type NewInquiry = {
    name : Text;
    phone : Text;
    caseDescription : Text;
  };

  type NewActor = {
    inquiries : Map.Map<Nat, NewInquiry>;
    nextInquiryId : Nat;
  };

  // Migration function: Maps old memories to new inquiries.
  public func run(old : OldActor) : NewActor {
    let newInquiries = old.memories.map<Nat, OldMemory, NewInquiry>(
      func(_k, v) { { name = v.title; phone = ""; caseDescription = v.message } }
    );
    {
      inquiries = newInquiries;
      nextInquiryId = old.nextMemoryId;
    };
  };
};
