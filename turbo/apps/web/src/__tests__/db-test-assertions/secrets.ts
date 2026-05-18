import { and, eq } from "drizzle-orm";
import { secrets } from "@vm0/db/schema/secret";
import { initServices } from "../../lib/init-services";

export async function findTestSecretsByOrgAndName(params: {
  orgId: string;
  name: string;
}): Promise<
  Array<{ id: string; orgId: string; userId: string; type: string }>
> {
  initServices();
  return globalThis.services.db
    .select({
      id: secrets.id,
      orgId: secrets.orgId,
      userId: secrets.userId,
      type: secrets.type,
    })
    .from(secrets)
    .where(and(eq(secrets.orgId, params.orgId), eq(secrets.name, params.name)));
}
