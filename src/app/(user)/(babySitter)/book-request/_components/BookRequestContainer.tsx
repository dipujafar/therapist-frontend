"use client";
import BookSitterCompleted from "@/app/(user)/(familyUser)/book-sitter/_components/BookSitterCompleted";

import BookSitterRejected from "@/app/(user)/(familyUser)/book-sitter/_components/BookSitterRejected";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookRequests from "./BookRequests";
import BookRequestPending from "./BookRequestPending";
import BookRequestCompleted from "./BookRequestCompleted";
import BookRequestRejected from "./BookRequestRejected";

const BookRequestContainer = () => {
  return (
    <div>
      {/* navigation tabs */}
      <Tabs defaultValue="request">
        <TabsList className="grid xl:w-[40%] lg:w-[60%] md:w-[85%] mx-auto grid-cols-4 bg-transparent gap-x-2 mb-3">
          <TabsTrigger
            value="request"
            className="data-[state=active]:bg-primary-orange data-[state=active]:text-primary-white text-primary-black"
          >
            Request
          </TabsTrigger>
          <TabsTrigger
            value="pending"
            className="data-[state=active]:bg-primary-orange data-[state=active]:text-primary-white text-primary-black"
          >
            Pending
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="data-[state=active]:bg-primary-orange data-[state=active]:text-primary-white text-primary-black"
          >
            Completed
          </TabsTrigger>
          <TabsTrigger
            value="reject"
            className="data-[state=active]:bg-primary-orange data-[state=active]:text-primary-white text-primary-black"
          >
            Reject
          </TabsTrigger>
        </TabsList>

        <hr />
        <hr />

        {/* tabs content */}
        <TabsContent value="request" className="lg:mt-16 mt-8">
          <BookRequests></BookRequests>
        </TabsContent>
        <TabsContent value="pending" className="lg:mt-16 mt-8">
          <BookRequestPending></BookRequestPending>
        </TabsContent>
        <TabsContent value="completed" className="lg:mt-16 mt-8">
          <BookRequestCompleted></BookRequestCompleted>
        </TabsContent>
        <TabsContent value="reject" className="lg:mt-16 mt-8">
          <BookRequestRejected></BookRequestRejected>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookRequestContainer;
