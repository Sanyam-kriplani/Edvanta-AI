import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

export const createNewUser = inngest.createFunction(
    { id: "create-new-user" },
    { event: "user.create" },
    async ({ event, step }) => {
      return await step.run(
        "check if user exists, if not create new user in db",
        async () => {
          const { data } = event; // user data comes from Inngest event, not `useUser`
  
          // check if user exists in db
          const result = await db
            .select()
            .from(USER_TABLE)
            .where(eq(USER_TABLE.email, data.email));
  
          console.log("Result", result);
  
          // if new user → insert into db
          if (result?.length === 0) {
            const userResp = await db
              .insert(USER_TABLE)
              .values({
                username: data.name,
                email: data.email,
                password: "", // Clerk handles auth
              })
              .returning({ id: USER_TABLE.id });
  
            return userResp;
          }
  
          return result;
        }
      );
    }
  );