function PasswordTokenForm({
  onGetPassToken,
  emailValue,
  setEmailValue,
  isLoading,
}) {
  return (
    <>
      <form
        onSubmit={onGetPassToken}
        className="flex flex-col gap-3 mt-3 text-base"
      >
        <label>Nhập email đã đăng kí</label>
        <input
          className="border px-2 py-3 rounded-md"
          type="text"
          placeholder="Email ..."
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <button
          className="px-3 py-2 bg-blue-500 text-white  max-w-[120px] w-full mx-auto rounded-md hover:brightness-110"
          type="submit"
        >
          {isLoading ? "Đang xử lý..." : "Gửi"}
        </button>
      </form>
    </>
  );
}

export default PasswordTokenForm;
