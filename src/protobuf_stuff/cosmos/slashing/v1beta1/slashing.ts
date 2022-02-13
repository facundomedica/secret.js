/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "cosmos.slashing.v1beta1";

/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
  address: string;
  /** Height at which validator was first a candidate OR was unjailed */
  startHeight: string;
  /**
   * Index which is incremented each time the validator was a bonded
   * in a block and may have signed a precommit or not. This in conjunction with the
   * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
   */
  indexOffset: string;
  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailedUntil?: Timestamp;
  /**
   * Whether or not a validator has been tombstoned (killed out of validator set). It is set
   * once the validator commits an equivocation or for any other configured misbehiavor.
   */
  tombstoned: boolean;
  /**
   * A counter kept to avoid unnecessary array reads.
   * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
   */
  missedBlocksCounter: string;
}

/** Params represents the parameters used for by the slashing module. */
export interface Params {
  signedBlocksWindow: string;
  minSignedPerWindow: Uint8Array;
  downtimeJailDuration?: Duration;
  slashFractionDoubleSign: Uint8Array;
  slashFractionDowntime: Uint8Array;
}

function createBaseValidatorSigningInfo(): ValidatorSigningInfo {
  return {
    address: "",
    startHeight: "0",
    indexOffset: "0",
    jailedUntil: undefined,
    tombstoned: false,
    missedBlocksCounter: "0",
  };
}

export const ValidatorSigningInfo = {
  encode(
    message: ValidatorSigningInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.startHeight !== "0") {
      writer.uint32(16).int64(message.startHeight);
    }
    if (message.indexOffset !== "0") {
      writer.uint32(24).int64(message.indexOffset);
    }
    if (message.jailedUntil !== undefined) {
      Timestamp.encode(message.jailedUntil, writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (message.missedBlocksCounter !== "0") {
      writer.uint32(48).int64(message.missedBlocksCounter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ValidatorSigningInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.startHeight = longToString(reader.int64() as Long);
          break;
        case 3:
          message.indexOffset = longToString(reader.int64() as Long);
          break;
        case 4:
          message.jailedUntil = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.tombstoned = reader.bool();
          break;
        case 6:
          message.missedBlocksCounter = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorSigningInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      startHeight: isSet(object.startHeight) ? String(object.startHeight) : "0",
      indexOffset: isSet(object.indexOffset) ? String(object.indexOffset) : "0",
      jailedUntil: isSet(object.jailedUntil)
        ? fromJsonTimestamp(object.jailedUntil)
        : undefined,
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
      missedBlocksCounter: isSet(object.missedBlocksCounter)
        ? String(object.missedBlocksCounter)
        : "0",
    };
  },

  toJSON(message: ValidatorSigningInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.startHeight !== undefined &&
      (obj.startHeight = message.startHeight);
    message.indexOffset !== undefined &&
      (obj.indexOffset = message.indexOffset);
    message.jailedUntil !== undefined &&
      (obj.jailedUntil = fromTimestamp(message.jailedUntil).toISOString());
    message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
    message.missedBlocksCounter !== undefined &&
      (obj.missedBlocksCounter = message.missedBlocksCounter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorSigningInfo>, I>>(
    object: I,
  ): ValidatorSigningInfo {
    const message = createBaseValidatorSigningInfo();
    message.address = object.address ?? "";
    message.startHeight = object.startHeight ?? "0";
    message.indexOffset = object.indexOffset ?? "0";
    message.jailedUntil =
      object.jailedUntil !== undefined && object.jailedUntil !== null
        ? Timestamp.fromPartial(object.jailedUntil)
        : undefined;
    message.tombstoned = object.tombstoned ?? false;
    message.missedBlocksCounter = object.missedBlocksCounter ?? "0";
    return message;
  },
};

function createBaseParams(): Params {
  return {
    signedBlocksWindow: "0",
    minSignedPerWindow: new Uint8Array(),
    downtimeJailDuration: undefined,
    slashFractionDoubleSign: new Uint8Array(),
    slashFractionDowntime: new Uint8Array(),
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.signedBlocksWindow !== "0") {
      writer.uint32(8).int64(message.signedBlocksWindow);
    }
    if (message.minSignedPerWindow.length !== 0) {
      writer.uint32(18).bytes(message.minSignedPerWindow);
    }
    if (message.downtimeJailDuration !== undefined) {
      Duration.encode(
        message.downtimeJailDuration,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.slashFractionDoubleSign.length !== 0) {
      writer.uint32(34).bytes(message.slashFractionDoubleSign);
    }
    if (message.slashFractionDowntime.length !== 0) {
      writer.uint32(42).bytes(message.slashFractionDowntime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedBlocksWindow = longToString(reader.int64() as Long);
          break;
        case 2:
          message.minSignedPerWindow = reader.bytes();
          break;
        case 3:
          message.downtimeJailDuration = Duration.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.slashFractionDoubleSign = reader.bytes();
          break;
        case 5:
          message.slashFractionDowntime = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      signedBlocksWindow: isSet(object.signedBlocksWindow)
        ? String(object.signedBlocksWindow)
        : "0",
      minSignedPerWindow: isSet(object.minSignedPerWindow)
        ? bytesFromBase64(object.minSignedPerWindow)
        : new Uint8Array(),
      downtimeJailDuration: isSet(object.downtimeJailDuration)
        ? Duration.fromJSON(object.downtimeJailDuration)
        : undefined,
      slashFractionDoubleSign: isSet(object.slashFractionDoubleSign)
        ? bytesFromBase64(object.slashFractionDoubleSign)
        : new Uint8Array(),
      slashFractionDowntime: isSet(object.slashFractionDowntime)
        ? bytesFromBase64(object.slashFractionDowntime)
        : new Uint8Array(),
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.signedBlocksWindow !== undefined &&
      (obj.signedBlocksWindow = message.signedBlocksWindow);
    message.minSignedPerWindow !== undefined &&
      (obj.minSignedPerWindow = base64FromBytes(
        message.minSignedPerWindow !== undefined
          ? message.minSignedPerWindow
          : new Uint8Array(),
      ));
    message.downtimeJailDuration !== undefined &&
      (obj.downtimeJailDuration = message.downtimeJailDuration
        ? Duration.toJSON(message.downtimeJailDuration)
        : undefined);
    message.slashFractionDoubleSign !== undefined &&
      (obj.slashFractionDoubleSign = base64FromBytes(
        message.slashFractionDoubleSign !== undefined
          ? message.slashFractionDoubleSign
          : new Uint8Array(),
      ));
    message.slashFractionDowntime !== undefined &&
      (obj.slashFractionDowntime = base64FromBytes(
        message.slashFractionDowntime !== undefined
          ? message.slashFractionDowntime
          : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.signedBlocksWindow = object.signedBlocksWindow ?? "0";
    message.minSignedPerWindow = object.minSignedPerWindow ?? new Uint8Array();
    message.downtimeJailDuration =
      object.downtimeJailDuration !== undefined &&
      object.downtimeJailDuration !== null
        ? Duration.fromPartial(object.downtimeJailDuration)
        : undefined;
    message.slashFractionDoubleSign =
      object.slashFractionDoubleSign ?? new Uint8Array();
    message.slashFractionDowntime =
      object.slashFractionDowntime ?? new Uint8Array();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = Number(t.seconds) * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === "string") {
    return toTimestamp(new Date(o));
  } else {
    return Timestamp.fromJSON(o);
  }
}

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
