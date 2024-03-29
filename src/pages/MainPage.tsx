import styled from 'styled-components';
import { Layout } from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { Margin } from '../components/layout/Margin';
import { useEffect, useRef, useState } from 'react';
import { FlexBox } from '../components/layout/FlexBox';
import { Root, createRoot } from 'react-dom/client';

export const Main = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);

  const navigate = useNavigate();

  const goToErrorBoundaryPage = () => {
    navigate('/errorBoundary');
  };

  const goToSuspensePage = () => {
    navigate('/suspense');
  };

  const goToArrayMap = () => {
    navigate('/arrayMap');
  };

  const goToTodoList = () => {
    navigate('/todo');
  };

  const goToBatchUpdate = () => {
    navigate('/batchUpdate');
  };

  const goToCleanUp = () => {
    navigate('/cleanUp');
  };

  const goToMySyncExternalStore = () => {
    navigate('/mySyncExternalStore');
  };

  const createBoxes1 = () => {
    setIsShow((prev) => !prev);
  };

  const createBoxes2 = () => {
    setIsShow2((prev) => !prev);
  };

  const createBoxes3 = () => {
    setIsShow3((prev) => !prev);
  };

  return (
    <Layout title="메인 페이지">
      <Style.Container>
        <Style.RouteButton onClick={goToErrorBoundaryPage}>에러 바운더리 테스트</Style.RouteButton>
        <Margin direction={'row'} size={15} />
        <Style.RouteButton onClick={goToSuspensePage}>서스펜스 테스트</Style.RouteButton>
        <Margin direction={'row'} size={15} />
        <Style.RouteButton onClick={goToArrayMap}>key값 테스트</Style.RouteButton>
        <Margin direction={'row'} size={15} />
        <Style.RouteButton onClick={goToTodoList}>TODO 리스트</Style.RouteButton>
        <Margin direction={'row'} size={15} />
        <Style.RouteButton onClick={goToBatchUpdate}>배치 업데이트 테스트</Style.RouteButton>
        <Margin direction={'row'} size={15} />
        <Style.RouteButton onClick={goToCleanUp}>CleanUP 테스트</Style.RouteButton>
        <Margin direction={'row'} size={15} />
        <Style.RouteButton onClick={goToMySyncExternalStore}>
          MySyncExternalStore 테스트
        </Style.RouteButton>
        <Margin direction={'row'} size={15} />
        <Style.RouteButton onClick={createBoxes1}>
          {isShow ? '느린 박스 삭제' : '느린 박스 생성'}
        </Style.RouteButton>
        <Margin direction={'row'} size={15} />
        <Style.RouteButton onClick={createBoxes2}>
          {isShow2 ? '빠른 박스 삭제' : '빠른 박스 생성'}
        </Style.RouteButton>
        <Margin direction={'row'} size={15} />
        <Style.RouteButton onClick={createBoxes3}>
          {isShow3 ? '개선된 느린 박스 삭제' : '개선된 느린 박스 생성'}
        </Style.RouteButton>
      </Style.Container>
      <FlexBox>
        {isShow && (
          <FlexBox>
            <List1 />
          </FlexBox>
        )}
        {isShow2 && (
          <FlexBox>
            <List2 />
          </FlexBox>
        )}
        {isShow3 && (
          <FlexBox>
            <List3 />
          </FlexBox>
        )}
      </FlexBox>
    </Layout>
  );
};

const List1 = () => {
  return (
    <FlexBox direction="column">
      {Array.from({ length: 10000 }).map(() => (
        <ListItem />
      ))}
    </FlexBox>
  );
};

const ListItem = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = createRoot(divRef.current!);
    root.render(<Style.ListItem />);
  }, []);

  return <div ref={divRef}></div>;
};

const List2 = () => {
  return (
    <FlexBox direction="column">
      {Array.from({ length: 10000 }).map(() => (
        <Style.ListItem />
      ))}
    </FlexBox>
  );
};

const List3 = () => {
  const [roots, setRoots] = useState<Root[]>([]);
  const [isShow, setIsShow] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const createListItems = () => {
    return Array.from({ length: 10000 }).map(() => {
      const div = document.createElement('div');
      const root = createRoot(div);

      divRef.current?.appendChild(div);
      return root;
    });
  };

  const renderListItems = (roots: Root[]) => {
    roots.forEach((root) => {
      root.render(<Style.ListItem />);
    });
  };

  useEffect(() => {
    setRoots(createListItems());
  }, []);

  return (
    <FlexBox ref={divRef} direction="column">
      <button
        onClick={() => {
          setIsShow((prev) => !prev);

          if (!isShow) {
            renderListItems(roots);
          } else {
            roots.forEach((root) => {
              root.render(<></>);
            });
          }
        }}
      >
        개선된 느린 박스 {isShow ? '삭제' : '생성'}
      </button>
    </FlexBox>
  );
};

const Style = {
  Container: styled.div`
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
  `,
  RouteButton: styled.button`
    padding: 15px;
  `,
  ListItem: styled.li`
    width: 50px;
    height: 1px;

    background-color: red;
  `,
};
