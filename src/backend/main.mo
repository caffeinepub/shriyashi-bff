import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Migration "migration";

(with migration = Migration.run)
actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    caseDescription : Text;
  };
  let inquiries = Map.empty<Nat, Inquiry>();
  var nextInquiryId = 0;

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, caseDescription : Text) : async Nat {
    let inquiryId = nextInquiryId;
    nextInquiryId += 1;
    let inquiry : Inquiry = { name; phone; caseDescription };
    inquiries.add(inquiryId, inquiry);
    inquiryId;
  };

  public query ({ caller }) func getAllInquiries() : async [(Nat, Inquiry)] {
    inquiries.toArray();
  };

  public shared ({ caller }) func deleteInquiry(id : Nat) : async () {
    if (not inquiries.containsKey(id)) {
      Runtime.trap("Inquiry not found");
    };
    inquiries.remove(id);
  };

  // No need to store static profile information in backend.
  // Handle this in the frontend
};
