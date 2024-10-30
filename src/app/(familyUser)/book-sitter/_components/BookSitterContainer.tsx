"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookSitterRejected from "./BookSitterRejected";
import BookSitterPending from "./BookSitterPending";
import BookSitterCompleted from "./BookSitterCompleted";
import { Book } from "lucide-react";
import BookSitterRequest from "./BookSitterRequest";

const BookSitterContainer = () => {
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
          <BookSitterRequest></BookSitterRequest>
        </TabsContent>
        <TabsContent value="pending" className="lg:mt-16 mt-8">
          <BookSitterPending></BookSitterPending>
        </TabsContent>
        <TabsContent value="completed" className="lg:mt-16 mt-8">
          <BookSitterCompleted></BookSitterCompleted>
        </TabsContent>
        <TabsContent value="reject" className="lg:mt-16 mt-8">
          <BookSitterRejected></BookSitterRejected>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookSitterContainer;
