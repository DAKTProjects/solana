import React from "react";
import { TransactionInstruction, SignatureResult } from "@solana/web3.js";
import { InstructionCard } from "./InstructionCard";
import { useCluster } from "providers/cluster";
import { reportError } from "utils/sentry";
import { parseTokenSwapInstructionTitle } from "./token-swap/types";

export function TokenSwapDetailsCard({
  ix,
  index,
  result,
  signature,
  innerCards,
  childIndex,
  readable,
}: {
  ix: TransactionInstruction;
  index: number;
  result: SignatureResult;
  signature: string;
  innerCards?: JSX.Element[];
  childIndex?: number;
  readable: any;
}) {
  const { url } = useCluster();

  let title;
  try {
    title = parseTokenSwapInstructionTitle(ix);
  } catch (error) {
    reportError(error, {
      url: url,
      signature: signature,
    });
  }

  return (
    <InstructionCard
      readable={readable}
      ix={ix}
      index={index}
      result={result}
      title={`Token Swap: ${title || "Unknown"}`}
      innerCards={innerCards}
      childIndex={childIndex}
      defaultRaw
    />
  );
}
